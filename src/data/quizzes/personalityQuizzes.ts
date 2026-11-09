import { Quiz } from '../../types/quiz';

export const personalityQuizzes: Quiz[] = [
  {
    id: 'quiz-true-personality-type',
    slug: 'true-personality-type',
    title: 'What Is Your True Personality Type?',
    tagline: 'Discover whether your inner mind aligns with Visionary, Strategist, Diplomat, or Artisan.',
    description: 'Delve into your decision-making tendencies, social energy recharge habits, and philosophical core. This comprehensive test evaluates your dominant psychological archetype with tailored growth insights.',
    categorySlug: 'personality',
    categoryName: 'Personality',
    type: 'personality',
    estimatedTime: '4 min',
    difficulty: 'Medium',
    gradient: 'from-indigo-600 via-purple-600 to-pink-500',
    accentColor: 'indigo',
    iconName: 'UserCheck',
    playsCount: 24820,
    featured: true,
    trending: true,
    questions: [
      {
        id: 1,
        text: 'When facing an unexpected Friday evening with zero commitments, you intuitively:',
        options: [
          { text: 'Dive into a personal passion project, book, or deep creative rabbit hole.', trait: 'strategist' },
          { text: 'Message friends or join a vibrant gathering to recharge through social energy.', trait: 'diplomat' },
          { text: 'Map out ambitious plans, brainstorm future ventures, or learn a new skill.', trait: 'visionary' },
          { text: 'Indulge in sensory pleasures—cooking an elaborate meal, music, or crafting.', trait: 'artisan' }
        ]
      },
      {
        id: 2,
        text: 'In team projects or group deliberations, your natural contribution is:',
        options: [
          { text: 'Providing structural logic, finding flaws in arguments, and optimizing efficiency.', trait: 'strategist' },
          { text: 'Ensuring everyone feels heard, building consensus, and harmonizing friction.', trait: 'diplomat' },
          { text: 'Challenging existing assumptions with bold, unconventional future-facing concepts.', trait: 'visionary' },
          { text: 'Getting straight to the practical execution, crafting real tangible deliverables.', trait: 'artisan' }
        ]
      },
      {
        id: 3,
        text: 'When making a major life decision (career pivot, relocation), you prioritize:',
        options: [
          { text: 'Thorough data analysis, risk calculation, and long-term contingency scenarios.', trait: 'strategist' },
          { text: 'How it impacts your closest relationships and aligns with your core humanitarian values.', trait: 'diplomat' },
          { text: 'The magnitude of the transformative potential and long-range legacy it builds.', trait: 'visionary' },
          { text: 'Whether it offers genuine autonomy, excitement, and day-to-day creative freedom.', trait: 'artisan' }
        ]
      },
      {
        id: 4,
        text: 'When a crisis or sudden disruption strikes, your immediate physiological reaction is:',
        options: [
          { text: 'Calm detachment: you dissect the root causes and isolate the problem logically.', trait: 'strategist' },
          { text: 'Empathy first: you check in on the emotional well-being of the people involved.', trait: 'diplomat' },
          { text: 'Opportunity radar: you instantly see how the chaos can be converted into a new advantage.', trait: 'visionary' },
          { text: 'Tactical action: you roll up your sleeves and immediately start fixing what is broken.', trait: 'artisan' }
        ]
      },
      {
        id: 5,
        text: 'Your ideal creative space or workspace environment is best characterized by:',
        options: [
          { text: 'Orderly, quiet, with high-performance tools and minimal unnecessary clutter.', trait: 'strategist' },
          { text: 'Warm, collaborative, filled with inspiring artwork, warmth, and open discussion.', trait: 'diplomat' },
          { text: 'Dynamic whiteboards, panoramic vistas, and limitless conceptual freedom.', trait: 'visionary' },
          { text: 'Hands-on tactile materials, rich textures, and expressive dynamic tools.', trait: 'artisan' }
        ]
      },
      {
        id: 6,
        text: 'Which compliment resonates most deeply with your sense of personal pride?',
        options: [
          { text: '"Your analytical precision and objective clarity saved the entire initiative."', trait: 'strategist' },
          { text: '"You have a rare emotional wisdom that brings people together and heals divides."', trait: 'diplomat' },
          { text: '"Your original perspective transformed how everyone views what is possible."', trait: 'visionary' },
          { text: '"Your craftsmanship and ability to execute flawlessly is unmatched."', trait: 'artisan' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'visionary',
        name: 'The Visionary Architect',
        archetype: 'Intuitive & Future-Driven',
        badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
        summary: 'A pioneering thinker who spots latent patterns and re-imagines what is possible.',
        description: 'You possess a rare cognitive orientation toward future horizons. Where others see isolated facts, you perceive overarching frameworks and transformative possibilities. You thrive when questioning dogma and building innovative pathways from scratch.',
        strengths: ['Unconventional problem-solving', 'Strategic foresight', 'Inspirational articulation', 'Intellectual courage'],
        insights: ['You can easily get impatient with repetitive linear execution once the conceptual puzzle is solved.'],
        recommendations: [
          'Partner with detail-oriented executors who turn your big-picture blueprints into reality.',
          'Schedule regular unstructured creative blocks to let your intuition connect disparate dots.',
          'Practice communicating your ideas in sequential phases so team members can follow your leap.'
        ]
      },
      {
        id: 'strategist',
        name: 'The Master Strategist',
        archetype: 'Analytical & Disciplined',
        badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
        summary: 'A calm, razor-sharp analyst who navigates complexity with unwavering clarity.',
        description: 'You are guided by objective principles, precision, and systemic efficiency. When ambiguity reigns, your mind effortlessly categorizes variables, evaluates trade-offs, and builds resilient contingency plans that withstand pressure.',
        strengths: ['Intellectual rigor', 'Crisis composure', 'High operational standards', 'Objective discernment'],
        insights: ['Your desire for absolute proof can sometimes stall swift tactical decisions.'],
        recommendations: [
          'Embrace the 80/20 rule: often good data today beats perfect certainty tomorrow.',
          'Remember to validate emotional perspectives in group settings, not just cold metrics.',
          'Channel your strategic lens into mentorship to empower developing colleagues.'
        ]
      },
      {
        id: 'diplomat',
        name: 'The Empathetic Diplomat',
        archetype: 'Harmonious & Value-Centered',
        badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        summary: 'A heartfelt bridge-builder who unlocks human potential and deep mutual trust.',
        description: 'Your fundamental orientation centers on emotional resonance, ethics, and mutual empowerment. You read rooms with astonishing accuracy, noticing unspoken cues and nurturing genuine environments where everyone can flourish.',
        strengths: ['Emotional intelligence', 'Conflict de-escalation', 'Authentic loyalty', 'Deep listening'],
        insights: ['You risk absorbing other people’s emotional turbulence and exhausting your inner reserves.'],
        recommendations: [
          'Establish non-negotiable personal boundaries to protect your mental sanctuary.',
          'Do not shy away from candid, constructive confrontation—it often builds deeper trust.',
          'Celebrate your own milestones with the same fervor you offer to loved ones.'
        ]
      },
      {
        id: 'artisan',
        name: 'The Kinetic Artisan',
        archetype: 'Pragmatic & Expressive',
        badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
        summary: 'A master of practical craft and spontaneous flair who thrives in tangible reality.',
        description: 'You believe action speaks louder than theoretical speculation. You possess an innate kinetic intelligence, responsive instincts, and a profound appreciation for aesthetic beauty, tactile results, and present-moment engagement.',
        strengths: ['Rapid tactile adaptability', 'Artistic intuition', 'High stress endurance', 'Real-world resourcefulness'],
        insights: ['Long-winded bureaucratic meetings and theoretical abstraction drain your vitality rapidly.'],
        recommendations: [
          'Anchor your routine with physical creative outlets (design, cooking, sports, crafting).',
          'Break large annual targets into short, tangible 2-week sprint milestones.',
          'Trust your physical intuition—it often processes environmental nuances before conscious logic.'
        ]
      }
    ]
  },
  {
    id: 'quiz-discover-hidden-strengths',
    slug: 'discover-hidden-strengths',
    title: 'Discover Your Hidden Strengths',
    tagline: 'Pinpoint the subconscious superpower you possess that others constantly rely upon.',
    description: 'We frequently overlook our greatest innate advantages because they feel as effortless as breathing. Unmask your subterranean capabilities through scenario-based situational inquiries.',
    categorySlug: 'personality',
    categoryName: 'Personality',
    type: 'personality',
    estimatedTime: '3 min',
    difficulty: 'Easy',
    gradient: 'from-purple-600 to-indigo-700',
    accentColor: 'purple',
    iconName: 'Sparkles',
    playsCount: 18450,
    questions: [
      {
        id: 1,
        text: 'When friends or coworkers find themselves in a jam, what do they instinctively come to you for?',
        options: [
          { text: 'A completely level-headed, non-judgmental listening ear and moral comfort.', trait: 'anchor' },
          { text: 'A brilliant, inventive workaround to an obstacle that seemed completely blocked.', trait: 'catalyst' },
          { text: 'A step-by-step roadmap that organizes chaotic ideas into an orderly timeline.', trait: 'clarity' },
          { text: 'An honest, fearless assessment of the situation without sugarcoating.', trait: 'truth' }
        ]
      },
      {
        id: 2,
        text: 'Which internal motto feels most natural to the way you conduct your life?',
        options: [
          { text: '"Peace of mind and integrity are worth more than any worldly rush."', trait: 'anchor' },
          { text: '"Rules are merely suggestions when there is a better way to innovate."', trait: 'catalyst' },
          { text: '"Clarity of thought produces mastery in outcome."', trait: 'clarity' },
          { text: '"Truth may sting today, but it saves years of self-deception tomorrow."', trait: 'truth' }
        ]
      },
      {
        id: 3,
        text: 'You enter an unfamiliar social environment or conference. Your subtle reflex is to:',
        options: [
          { text: 'Seek out the person standing alone or feeling overwhelmed to make them comfortable.', trait: 'anchor' },
          { text: 'Spark up an unexpected conversation topic that creates instant laughter and curiosity.', trait: 'catalyst' },
          { text: 'Observe group patterns and identify the underlying organizational dynamics.', trait: 'clarity' },
          { text: 'Gauge who is authentic and who is putting on a superficial performance.', trait: 'truth' }
        ]
      },
      {
        id: 4,
        text: 'When reviewing past accomplishments, what gave you the deepest satisfaction?',
        options: [
          { text: 'Helping someone get back on their feet during a painful season.', trait: 'anchor' },
          { text: 'Launching a novel endeavor that defied conventional expectations.', trait: 'catalyst' },
          { text: 'Restructuring a tangled mess into an elegant, automated system.', trait: 'clarity' },
          { text: 'Standing your ground against consensus when your moral conviction was clear.', trait: 'truth' }
        ]
      },
      {
        id: 5,
        text: 'If you were given 30 days of complete uninterrupted freedom, you would:',
        options: [
          { text: 'Retreat to nature to recharge your spirit and connect deeply with close companions.', trait: 'anchor' },
          { text: 'Experiment with wildly new technologies, art forms, or experimental side-hustles.', trait: 'catalyst' },
          { text: 'Master a deep cognitive subject from textbooks, research, and structured practice.', trait: 'clarity' },
          { text: 'Write a manifesto or share hard-earned principles with people who need real guidance.', trait: 'truth' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'anchor',
        name: 'The Steady Anchor',
        archetype: 'Emotional Gravity & Resilience',
        badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        summary: 'Your psychological stability provides safety and grounding when life feels turbulent.',
        description: 'Your hidden strength is unwavering emotional equilibrium. While others get swept away by reactionary panics, your presence lowers the room temperature, restores perspective, and creates a sanctuary for clarity.',
        strengths: ['Unshakeable composure', 'Deep empathy without judgment', 'High trust retention'],
        insights: ['People lean heavily on your shoulders; be sure to lean on others when your tank runs dry.'],
        recommendations: ['Dedicate solitary restorative time every week to maintain your quiet inner well.']
      },
      {
        id: 'catalyst',
        name: 'The Creative Catalyst',
        archetype: 'Breakthrough Ingenuity',
        badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
        summary: 'You find ingenious paths around barriers that leave other minds completely paralyzed.',
        description: 'You have a natural cross-disciplinary intellect that bridges unrelated concepts. Your superpower is creative alchemy—taking ordinary inputs and synthesizing unexpected breakthroughs that revitalize projects.',
        strengths: ['Lateral resourcefulness', 'Uncanny adaptability', 'Infectious momentum'],
        insights: ['You can easily get bored once the initial spark is lit; build follow-through rituals.'],
        recommendations: ['Keep an idea ledger to capture creative sparks before they evaporate.']
      },
      {
        id: 'clarity',
        name: 'The Clarity Architect',
        archetype: 'Systemic Discernment',
        badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
        summary: 'You distill sprawling noise into simple, executable, and pristine structure.',
        description: 'You possess rare cognitive signal-to-noise filtering. While most people get overwhelmed by clutter, your mind instinctively builds clean mental taxonomies, organizes priorities, and produces elegant simplicity.',
        strengths: ['Structural clarity', 'Pattern extraction', 'Process optimization'],
        insights: ['Avoid over-engineering solutions when a rough draft suffices for the first pass.'],
        recommendations: ['Share your organizational frameworks with your team—it saves everyone countless hours.']
      },
      {
        id: 'truth',
        name: 'The Truth Seeker',
        archetype: 'Integrity & Moral Courage',
        badgeColor: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800',
        summary: 'You cut through pretense with fearless honesty and unerring moral instinct.',
        description: 'You have a built-in radar for authenticity. You cannot stand false pretenses, performative masks, or unexamined assumptions. People deeply value your courage to state what everyone else is thinking.',
        strengths: ['Radical authenticity', 'Unyielding ethical compass', 'Bullshit detection'],
        insights: ['Pair your sharp observations with gentle timing to prevent defensive reactions.'],
        recommendations: ['Frame hard truths as shared questions to help others reach the conclusion alongside you.']
      }
    ]
  },
  {
    id: 'quiz-personality-archetype',
    slug: 'personality-archetype',
    title: 'Which Personality Archetype Are You?',
    tagline: 'Discover your ancient psychological archetype: Hero, Sage, Explorer, or Caregiver.',
    description: 'Based on Carl Jung’s archetypal psychology, this introspective test illuminates the mythic narrative driving your motivations, dreams, and unconscious instincts.',
    categorySlug: 'personality',
    categoryName: 'Personality',
    type: 'personality',
    estimatedTime: '4 min',
    difficulty: 'Medium',
    gradient: 'from-violet-700 via-purple-600 to-indigo-800',
    accentColor: 'violet',
    iconName: 'Crown',
    playsCount: 21300,
    questions: [
      {
        id: 1,
        text: 'What is your greatest subconscious fear?',
        options: [
          { text: 'Failing to make an impact, being viewed as weak or ineffective.', trait: 'hero' },
          { text: 'Being misled, living in ignorance, or making foolish decisions.', trait: 'sage' },
          { text: 'Conformity, entrapment, and living a predictable, boring routine.', trait: 'explorer' },
          { text: 'Selfishness, abandoning loved ones, or seeing others suffer alone.', trait: 'caregiver' }
        ]
      },
      {
        id: 2,
        text: 'When you reflect on the ultimate goal of your life journey, it looks like:',
        options: [
          { text: 'Overcoming formidable trials and leaving a triumphant legacy.', trait: 'hero' },
          { text: 'Attaining profound comprehension, wisdom, and understanding the universe.', trait: 'sage' },
          { text: 'Experiencing the boundless variety of life, travel, and personal freedom.', trait: 'explorer' },
          { text: 'Nurturing a warm community and leaving people better than you found them.', trait: 'caregiver' }
        ]
      },
      {
        id: 3,
        text: 'In your favorite stories and films, the character you empathize with most is:',
        options: [
          { text: 'The disciplined warrior fighting insurmountable odds to protect the realm.', trait: 'hero' },
          { text: 'The mentor carrying ancient lore, deciphering the secret codex.', trait: 'sage' },
          { text: 'The wanderer setting sail for uncharted waters beyond the edge of the map.', trait: 'explorer' },
          { text: 'The steadfast protector who shields the innocent with sacrificial devotion.', trait: 'caregiver' }
        ]
      },
      {
        id: 4,
        text: 'How do you instinctively handle emotional or psychological vulnerability?',
        options: [
          { text: 'Channel it into intense motivation, fitness, or conquering the next challenge.', trait: 'hero' },
          { text: 'Study it objectively through books, psychology, and philosophical inquiry.', trait: 'sage' },
          { text: 'Seek physical change of scenery, travel, or a fresh clean start elsewhere.', trait: 'explorer' },
          { text: 'Open up quietly in intimate one-on-one heart-to-heart conversations.', trait: 'caregiver' }
        ]
      },
      {
        id: 5,
        text: 'Your definition of a truly wasted day is:',
        options: [
          { text: 'A day where you were passive, lazy, and achieved nothing of value.', trait: 'hero' },
          { text: 'A day dominated by frivolous chatter without gaining a single new insight.', trait: 'sage' },
          { text: 'A day locked in identical four walls doing repetitive bureaucratic chores.', trait: 'explorer' },
          { text: 'A day where someone you cared about was hurting and you weren’t there to help.', trait: 'caregiver' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'hero',
        name: 'The Resilient Hero',
        archetype: 'Courage & Mastery',
        badgeColor: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
        summary: 'Driven by courage, discipline, and the burning desire to conquer adversity.',
        description: 'You carry the ancient flame of the Champion. Challenges do not deter you; they ignite your willpower. You believe that greatness is forged in the crucible of discipline, perseverance, and proving your worth through action.',
        strengths: ['Indomitable tenacity', 'High personal accountability', 'Leadership under fire'],
        insights: ['Beware the trap of defining your self-worth exclusively by your latest victories.'],
        recommendations: ['Learn to rest without guilt; rest is the fuel that primes your next triumph.']
      },
      {
        id: 'sage',
        name: 'The Wise Sage',
        archetype: 'Knowledge & Truth',
        badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
        summary: 'Guided by curiosity, intellectual rigor, and the quest for fundamental truth.',
        description: 'You are the philosopher and truth-teller. For you, the greatest virtue is discernment, and the greatest trap is uncritical belief. You peel back layers of reality to comprehend first principles and enlighten those around you.',
        strengths: ['Profound clarity', 'Analytical depth', 'Objective contemplation'],
        insights: ['Knowledge without execution can become an ivory tower; share your insights in action.'],
        recommendations: ['Translate your complex concepts into accessible metaphors that elevate your community.']
      },
      {
        id: 'explorer',
        name: 'The Free Explorer',
        archetype: 'Autonomy & Discovery',
        badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
        summary: 'Fuelled by independence, curiosity, and an insatiable appetite for authentic life.',
        description: 'You refuse to live inside boxes built by other people. Your compass points toward autonomy, uncharted horizons, and novel experiences. You inspire others to break free from timid conformity and embrace life’s grandeur.',
        strengths: ['Boundary-breaking creativity', 'Fearless adaptability', 'Radical open-mindedness'],
        insights: ['Fleeing routine can sometimes prevent the deep rewards that come from roots and commitment.'],
        recommendations: ['Build anchor habits that travel with you anywhere, giving freedom a solid grounding.']
      },
      {
        id: 'caregiver',
        name: 'The Devoted Caregiver',
        archetype: 'Compassion & Generosity',
        badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        summary: 'Motivated by selfless love, community protection, and tender stewardship.',
        description: 'You are the beating heart of your community. Your superpower is unconditional warmth and attentive care. You anticipate needs before they are spoken and create spaces where human beings feel cherished and secure.',
        strengths: ['Boundless empathy', 'Protective loyalty', 'Social warmth'],
        insights: ['You often forget to extend the same loving kindness to yourself that you give to others.'],
        recommendations: ['Treat self-care not as a luxury, but as an essential responsibility to maintain your light.']
      }
    ]
  }
];
