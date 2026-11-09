import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateKnowledgeScore,
  calculatePersonalityOutcome,
  getKnowledgeTier,
  encodeChallengeUrl,
  decodeChallengeFromSearch
} from './scoring';
import { QuizQuestion, KnowledgeTier, PersonalityOutcome } from '../types/quiz';

const sampleTiers: KnowledgeTier[] = [
  {
    minPercent: 90,
    maxPercent: 100,
    title: 'Master',
    badgeColor: 'emerald',
    description: 'Master tier',
    advice: 'Keep it up'
  },
  {
    minPercent: 50,
    maxPercent: 89,
    title: 'Proficient',
    badgeColor: 'indigo',
    description: 'Proficient tier',
    advice: 'Good job'
  },
  {
    minPercent: 0,
    maxPercent: 49,
    title: 'Apprentice',
    badgeColor: 'amber',
    description: 'Apprentice tier',
    advice: 'Try again'
  }
];

const mockKnowledgeQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: 'What is 2+2?',
    options: [{ text: '3' }, { text: '4' }, { text: '5' }],
    correctIndex: 1,
    explanation: '2+2 = 4'
  },
  {
    id: 2,
    text: 'What is the capital of France?',
    options: [{ text: 'Berlin' }, { text: 'London' }, { text: 'Paris' }],
    correctIndex: 2,
    explanation: 'Paris is the capital of France'
  },
  {
    id: 3,
    text: 'Which planet is the Red Planet?',
    options: [{ text: 'Mars' }, { text: 'Venus' }, { text: 'Jupiter' }],
    correctIndex: 0,
    explanation: 'Mars is called the Red Planet'
  },
  {
    id: 4,
    text: 'What is H2O?',
    options: [{ text: 'Salt' }, { text: 'Water' }, { text: 'Hydrogen' }],
    correctIndex: 1,
    explanation: 'H2O is water'
  }
];

test('calculateKnowledgeScore correctly computes 100% score and tier', () => {
  const result = calculateKnowledgeScore(mockKnowledgeQuestions, [1, 2, 0, 1], sampleTiers);
  assert.equal(result.score, 4);
  assert.equal(result.total, 4);
  assert.equal(result.percentage, 100);
  assert.equal(result.correctAnswers.length, 4);
  assert.equal(result.incorrectAnswers.length, 0);
  assert.equal(result.tier.title, 'Master');
});

test('calculateKnowledgeScore handles partial score and tier thresholds', () => {
  // 2 out of 4 correct = 50%
  const result = calculateKnowledgeScore(mockKnowledgeQuestions, [1, 0, 0, 0], sampleTiers);
  assert.equal(result.score, 2);
  assert.equal(result.percentage, 50);
  assert.equal(result.tier.title, 'Proficient');
  assert.deepEqual(result.correctAnswers, [0, 2]);
  assert.deepEqual(result.incorrectAnswers, [1, 3]);
});

test('calculateKnowledgeScore handles 0% score gracefully', () => {
  const result = calculateKnowledgeScore(mockKnowledgeQuestions, [0, 0, 1, 0], sampleTiers);
  assert.equal(result.score, 0);
  assert.equal(result.percentage, 0);
  assert.equal(result.tier.title, 'Apprentice');
});

test('getKnowledgeTier selects tier correctly across boundaries', () => {
  assert.equal(getKnowledgeTier(95, sampleTiers).title, 'Master');
  assert.equal(getKnowledgeTier(90, sampleTiers).title, 'Master');
  assert.equal(getKnowledgeTier(89, sampleTiers).title, 'Proficient');
  assert.equal(getKnowledgeTier(50, sampleTiers).title, 'Proficient');
  assert.equal(getKnowledgeTier(49, sampleTiers).title, 'Apprentice');
  assert.equal(getKnowledgeTier(0, sampleTiers).title, 'Apprentice');
});

const mockOutcomes: PersonalityOutcome[] = [
  {
    id: 'visionary',
    name: 'The Visionary',
    archetype: 'Intuitive',
    badgeColor: 'indigo',
    summary: 'Visionary summary',
    description: 'Visionary desc',
    strengths: ['Creativity'],
    insights: ['Focus'],
    recommendations: ['Build team']
  },
  {
    id: 'strategist',
    name: 'The Strategist',
    archetype: 'Analytical',
    badgeColor: 'blue',
    summary: 'Strategist summary',
    description: 'Strategist desc',
    strengths: ['Analysis'],
    insights: ['Speed'],
    recommendations: ['Embrace risk']
  }
];

const mockPersonalityQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: 'Your instinct is to:',
    options: [
      { text: 'Dream big', trait: 'visionary' },
      { text: 'Plan meticulously', trait: 'strategist' }
    ]
  },
  {
    id: 2,
    text: 'In meetings you prefer to:',
    options: [
      { text: 'Propose ideas', trait: 'visionary' },
      { text: 'Analyze risks', trait: 'strategist' }
    ]
  },
  {
    id: 3,
    text: 'When facing uncertainty you:',
    options: [
      { text: 'Innovate', trait: 'visionary' },
      { text: 'Gather metrics', trait: 'strategist' }
    ]
  }
];

test('calculatePersonalityOutcome determines dominant outcome correctly', () => {
  // 2 visionary, 1 strategist
  const result = calculatePersonalityOutcome(mockPersonalityQuestions, [0, 0, 1], mockOutcomes);
  assert.equal(result.topTrait, 'visionary');
  assert.equal(result.matchedOutcome.id, 'visionary');
  assert.equal(result.traitScores['visionary'], 2);
  assert.equal(result.traitScores['strategist'], 1);
});

test('challenge URL encoding and decoding preserves parameters', () => {
  const url = encodeChallengeUrl('world-geography-quiz', 'Sarah M.', 85, 'Master');
  assert.ok(url.includes('/quiz/world-geography-quiz'));
  assert.ok(url.includes('challenger=Sarah+M.') || url.includes('challenger=Sarah%20M.'));
  assert.ok(url.includes('score=85'));

  const parsed = decodeChallengeFromSearch('?challenger=Sarah%20M.&score=85&outcome=Master');
  assert.ok(parsed !== null);
  assert.equal(parsed?.challengerName, 'Sarah M.');
  assert.equal(parsed?.challengerScore, 85);
  assert.equal(parsed?.outcomeName, 'Master');
});
