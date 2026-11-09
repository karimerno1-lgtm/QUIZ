import { Quiz } from '../../types/quiz';

export const loveQuizzes: Quiz[] = [
  {
    id: 'quiz-know-your-partner',
    slug: 'know-your-partner',
    title: 'How Well Do You Know Your Partner?',
    tagline: 'Test your intimacy depth, emotional radar, and knowledge of your partner’s inner world.',
    description: 'Dr. John Gottman’s research reveals that profound love is grounded in detailed "Love Maps." See how closely your awareness aligns with your partner’s dreams, stressors, and emotional rhythms.',
    categorySlug: 'love-relationships',
    categoryName: 'Love & Relationships',
    type: 'personality',
    estimatedTime: '4 min',
    difficulty: 'Medium',
    gradient: 'from-rose-500 via-pink-600 to-red-500',
    accentColor: 'rose',
    iconName: 'HeartHandshake',
    playsCount: 31200,
    featured: true,
    questions: [
      {
        id: 1,
        text: 'When your partner has had an exhausting, high-stress day, what do they desire most?',
        options: [
          { text: 'Uninterrupted decompression time in quiet solitude before interacting.', trait: 'space' },
          { text: 'A safe venting session where you listen attentively without offering unsolicited fixes.', trait: 'vent' },
          { text: 'Physical affection, a long embrace, and cozy comfort food.', trait: 'touch' },
          { text: 'A fun distraction—watching a favorite comedy, taking a scenic stroll, or playing games.', trait: 'fun' }
        ]
      },
      {
        id: 2,
        text: 'Do you know your partner’s single biggest current worry or anxiety right now?',
        options: [
          { text: 'Yes, we discuss their work or existential worries openly every week.', trait: 'vent' },
          { text: 'I have a strong intuitive grasp, though they often hold things quietly inside.', trait: 'space' },
          { text: 'I notice their physical tension and comfort them even when words are scarce.', trait: 'touch' },
          { text: 'We tend to keep things lighthearted and navigate worries spontaneously as they arise.', trait: 'fun' }
        ]
      },
      {
        id: 3,
        text: 'If your partner could take a 2-week dream sabbatical anywhere in the world tomorrow, they would pick:',
        options: [
          { text: 'A secluded cabin in the misty mountains with books, nature, and stillness.', trait: 'space' },
          { text: 'A romantic coastal villa where you two can talk for hours over sunset dinners.', trait: 'vent' },
          { text: 'A luxurious wellness spa resort centered around massage, hot springs, and relaxation.', trait: 'touch' },
          { text: 'A thrilling cultural metropolis packed with night markets, festivals, and concerts.', trait: 'fun' }
        ]
      },
      {
        id: 4,
        text: 'How does your partner handle disagreement during a tense debate?',
        options: [
          { text: 'Needs a brief cooling-off pause to organize thoughts before reconnecting calmly.', trait: 'space' },
          { text: 'Wants to talk through every subtle detail until emotional reconnection is felt.', trait: 'vent' },
          { text: 'A gentle touch of the hand or hug immediately softens their defenses.', trait: 'touch' },
          { text: 'Humor or breaking the tension with a funny observation helps them reset.', trait: 'fun' }
        ]
      },
      {
        id: 5,
        text: 'What is your partner’s favorite way to celebrate a major personal milestone?',
        options: [
          { text: 'A private, quiet toast reflecting on how much hard work went into the achievement.', trait: 'space' },
          { text: 'A heartfelt letter from you expressing specific reasons why you are proud of them.', trait: 'vent' },
          { text: 'An affectionate night in together, celebrating with touch and celebration.', trait: 'touch' },
          { text: 'Throwing an energetic party with close friends, music, and spontaneous toasts.', trait: 'fun' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'vent',
        name: 'The Deep Emotional Confidant',
        archetype: 'Heart-to-Heart Attunement',
        badgeColor: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800',
        summary: 'You hold exceptional emotional intimacy and understand your partner’s psychological inner world.',
        description: 'You prioritize active listening and emotional vulnerability. You possess an extensive "Love Map" of your partner’s hopes, triggers, and aspirations, creating a bedrock of psychological safety.',
        strengths: ['Attuned emotional radar', 'Empathetic validation', 'Deep conversational bonding'],
        insights: ['Remember that sometimes partners just want quiet presence rather than deep analytical discussion.'],
        recommendations: [
          'Continue weekly check-ins asking: "How can I love you best this week?"',
          'Practice sharing your own vulnerable needs with the same openness you invite from them.'
        ]
      },
      {
        id: 'space',
        name: 'The Respectful Sanctuary',
        archetype: 'Thoughtful Autonomy',
        badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
        summary: 'You respect your partner’s individuality, personal boundaries, and contemplative space.',
        description: 'You understand that healthy love needs oxygen. You never smother your partner, allowing them room to breathe and self-regulate, while offering calm support when they return to center.',
        strengths: ['Low pressure dynamics', 'Mature boundary respect', 'Quiet reliable loyalty'],
        insights: ['Be careful that healthy autonomy does not drift into emotional distance during busy seasons.'],
        recommendations: [
          'Build small predictable connection rituals (e.g. morning coffee together before daily rush).',
          'Periodically verify if their quietness is healthy recharge or unspoken worry.'
        ]
      },
      {
        id: 'touch',
        name: 'The Warm Kinesthetic Nurturer',
        archetype: 'Physical & Somatic Connection',
        badgeColor: 'bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-200 dark:border-pink-800',
        summary: 'You connect through physical presence, soothing touch, and comforting non-verbal cues.',
        description: 'You recognize that words often fall short where comforting touch, a warm embrace, and tangible presence speak volumes. You soothe your partner’s nervous system with genuine physical affection.',
        strengths: ['Somatic tension release', 'Affectionate warmth', 'Reassuring closeness'],
        insights: ['Ensure you also pair physical intimacy with verbal communication to align on life goals.'],
        recommendations: [
          'Incorporate intentional non-sexual affection: holding hands, shoulder rubs, and warm greetings.'
        ]
      },
      {
        id: 'fun',
        name: 'The Playful Adventure Partner',
        archetype: 'Joy & Shared Exploration',
        badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
        summary: 'You bring levity, spontaneous joy, and playful vitality to your relationship.',
        description: 'You keep romance young by injecting spontaneity, laughter, and new shared experiences. You remind your partner not to take life’s daily friction too seriously and create joyful memories.',
        strengths: ['Stress mitigation through laughter', 'Spontaneous date planning', 'High positive sentiment'],
        insights: ['During serious crises, ensure your partner feels your gravity alongside your humor.'],
        recommendations: [
          'Schedule a surprise date once a month to explore a restaurant or trail neither of you has tried.'
        ]
      }
    ]
  },
  {
    id: 'quiz-what-is-your-love-language',
    slug: 'what-is-your-love-language',
    title: 'What Is Your Love Language?',
    tagline: 'Discover your primary emotional dialect among the five core languages of love.',
    description: 'Dr. Gary Chapman’s five love languages framework has helped millions transform their romantic fulfillment. Discover your primary and secondary love languages to communicate affection effortlessly.',
    categorySlug: 'love-relationships',
    categoryName: 'Love & Relationships',
    type: 'personality',
    estimatedTime: '4 min',
    difficulty: 'Easy',
    gradient: 'from-pink-600 via-rose-600 to-purple-600',
    accentColor: 'pink',
    iconName: 'Heart',
    playsCount: 42900,
    featured: true,
    trending: true,
    questions: [
      {
        id: 1,
        text: 'Which gesture makes you feel most cherished by someone you adore?',
        options: [
          { text: 'A heartfelt note telling you specific qualities they admire about you.', trait: 'words' },
          { text: 'An uninterrupted evening together with phones put away, just talking.', trait: 'time' },
          { text: 'A thoughtful, personalized surprise gift they remembered you wanted.', trait: 'gifts' },
          { text: 'Them voluntarily taking care of a chore or errand you were dreading.', trait: 'acts' }
        ]
      },
      {
        id: 2,
        text: 'What hurts you most deeply in a romantic relationship?',
        options: [
          { text: 'Harsh, critical words or sarcastic put-downs that linger for days.', trait: 'words' },
          { text: 'A partner being constantly distracted by screens while you are talking.', trait: 'time' },
          { text: 'Forgotten anniversaries, thoughtless celebrations, or ignored milestones.', trait: 'gifts' },
          { text: 'Broken promises and feeling like you carry all practical domestic burdens alone.', trait: 'acts' }
        ]
      },
      {
        id: 3,
        text: 'How do you naturally express affection when you want to make your partner smile?',
        options: [
          { text: 'Texting them genuine compliments, romantic voice notes, and words of encouragement.', trait: 'words' },
          { text: 'Carving out protected weekend hours just to be completely present together.', trait: 'time' },
          { text: 'Picking up little treats, souvenirs, or books that reminded you of them.', trait: 'gifts' },
          { text: 'Making them morning coffee, detailing their car, or cooking their favorite comfort dish.', trait: 'acts' }
        ]
      },
      {
        id: 4,
        text: 'At the end of a demanding week, what fills your emotional fuel tank fastest?',
        options: [
          { text: 'Hearing: "I see how hard you worked this week, and I am so proud of you."', trait: 'words' },
          { text: 'A cozy evening side-by-side on the sofa enjoying deep conversation.', trait: 'time' },
          { text: 'Unwrapping a sweet treat or small token they secretly brought home for you.', trait: 'gifts' },
          { text: 'Coming home to discover the laundry done, dishes put away, and dinner prepped.', trait: 'acts' }
        ]
      },
      {
        id: 5,
        text: 'If you had to pick one dream birthday gesture from your partner:',
        options: [
          { text: 'A personalized book or letter detailing what you have meant to them this year.', trait: 'words' },
          { text: 'A full day dedicated entirely to spending time together doing your favorite things.', trait: 'time' },
          { text: 'A carefully curated, meaningful gift that required immense forethought to find.', trait: 'gifts' },
          { text: 'Them handling all logistics, scheduling, cooking, and arrangements seamlessly.', trait: 'acts' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'words',
        name: 'Words of Affirmation',
        archetype: 'Verbal Expression & Praise',
        badgeColor: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800',
        summary: 'Spoken and written affection, sincere compliments, and verbal encouragement mean the world to you.',
        description: 'For you, words have tremendous transformative power. Unsolicited compliments, letters, and expressions of gratitude feed your soul. Conversely, harsh insults or cold dismissals wound deeply and linger.',
        strengths: ['Articulate appreciation', 'Encouraging companion', 'Expressive romantic clarity'],
        insights: ['Partners with non-verbal languages may feel love deeply without articulating it as naturally.'],
        recommendations: [
          'Let your partner know that a simple "You look great today" or "Thank you for what you do" recharges you instantly.'
        ]
      },
      {
        id: 'time',
        name: 'Quality Time',
        archetype: 'Undivided Presence & Attunement',
        badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
        summary: 'Undivided attention, eye contact, and focused shared experiences are your emotional lifeblood.',
        description: 'Being together in the same room is not enough; you crave genuine emotional presence. Putting screens aside, engaging in meaningful dialogue, and sharing new adventures affirms that you are a top priority.',
        strengths: ['High relational presence', 'Attentive companion', 'Memory-making partner'],
        insights: ['Distracted multitasking during conversations can feel like active rejection.'],
        recommendations: [
          'Institute a "no phones at the dinner table" covenant to safeguard sacred connection time.'
        ]
      },
      {
        id: 'acts',
        name: 'Acts of Service',
        archetype: 'Practical Care & Thoughtfulness',
        badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        summary: 'To you, actions speak infinitely louder than words. Thoughtful assistance demonstrates devotion.',
        description: 'You feel most cherished when your partner eases the burdens of daily life through practical helpfulness. Whether preparing a meal, tackling a chore, or running an errand, proactive assistance signals deep consideration.',
        strengths: ['Reliable dependability', 'Tangible problem-solving', 'Everyday teamwork'],
        insights: ['Broken promises or laziness can feel like a direct disregard for your partnership.'],
        recommendations: [
          'Be explicit about which small daily chores lift the most stress from your mind.'
        ]
      },
      {
        id: 'gifts',
        name: 'Receiving Gifts',
        archetype: 'Symbolic Thoughtfulness & Tokens',
        badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
        summary: 'You treasure visual, tangible symbols of love and the thought invested in selecting them.',
        description: 'This is not about materialism; it is about intentionality. A gift represents that your partner was thinking of you when you were apart. The ideal gift shows they listened to an offhand remark and remembered.',
        strengths: ['Symbolic memory retention', 'Thoughtful celebration', 'Cherished sentimentalism'],
        insights: ['A rushed, generic gift can feel more disheartening than receiving nothing at all.'],
        recommendations: [
          'Keep a shared wish list or note file where you and your partner can save little gift inspirations year-round.'
        ]
      }
    ]
  },
  {
    id: 'quiz-partner-compatibility',
    slug: 'partner-compatibility',
    title: 'How Compatible Are You and Your Partner?',
    tagline: 'Evaluate your alignment across core life values, communication styles, and long-term vision.',
    description: 'Compatibility is not about being identical clones; it is about shared values, mutual respect, and complementary problem-solving. Take this assessment to explore your partnership synergy.',
    categorySlug: 'love-relationships',
    categoryName: 'Love & Relationships',
    type: 'personality',
    estimatedTime: '4 min',
    difficulty: 'Medium',
    gradient: 'from-red-500 via-rose-600 to-pink-600',
    accentColor: 'red',
    iconName: 'Flame',
    playsCount: 27800,
    questions: [
      {
        id: 1,
        text: 'How do you and your partner typically align when managing money, budgeting, and savings?',
        options: [
          { text: 'We have very similar financial habits and agree naturally on saving vs. spending.', trait: 'high' },
          { text: 'One is more frugal and one is more spontaneous, but we compromise peacefully.', trait: 'moderate' },
          { text: 'We occasionally bump heads over priorities, but our underlying goals match.', trait: 'moderate' },
          { text: 'We have wildly different philosophy around money that causes recurring friction.', trait: 'growth' }
        ]
      },
      {
        id: 2,
        text: 'When a serious conflict erupts, what describes your resolution dynamic?',
        options: [
          { text: 'We cool down quickly, hear each other with respect, and apologize genuinely.', trait: 'high' },
          { text: 'It takes a bit of time to de-escalate, but we always reach a constructive consensus.', trait: 'high' },
          { text: 'One person pursues while the other retreats, but we eventually reconnect.', trait: 'moderate' },
          { text: 'Old arguments get resurfaced and resolutions often feel fragile or unresolved.', trait: 'growth' }
        ]
      },
      {
        id: 3,
        text: 'When picturing where you want to be in 5 to 10 years (lifestyle, location, ambitions):',
        options: [
          { text: 'Our visions fit together like puzzle pieces—we want the same foundational life.', trait: 'high' },
          { text: 'We are flexible and willing to adapt our individual paths to support one another.', trait: 'high' },
          { text: 'We have some distinct personal dreams that will require significant logistical compromise.', trait: 'moderate' },
          { text: 'We have competing non-negotiables that pull us in fundamentally opposite directions.', trait: 'growth' }
        ]
      },
      {
        id: 4,
        text: 'How would you describe your shared sense of humor and day-to-day playfulness?',
        options: [
          { text: 'Effortless—we have a rich universe of inside jokes and make each other laugh daily.', trait: 'high' },
          { text: 'Warm and affectionate; we enjoy each other’s company even when humor differs.', trait: 'moderate' },
          { text: 'We have different comedic styles, but appreciate each other’s quirks.', trait: 'moderate' },
          { text: 'We sometimes misunderstand each other’s tone and take things personally.', trait: 'growth' }
        ]
      },
      {
        id: 5,
        text: 'At your core, do you feel emotionally safe to reveal your deepest flaws to your partner?',
        options: [
          { text: 'Completely. There is zero fear of ridicule, disdain, or weaponized vulnerability.', trait: 'high' },
          { text: 'Yes, with almost everything, though a few vulnerabilities take extra courage.', trait: 'high' },
          { text: 'Mostly, but I still guard certain insecurities to avoid being judged.', trait: 'moderate' },
          { text: 'I frequently feel on guard and hesitate to be my unvarnished self.', trait: 'growth' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'high',
        name: 'Harmonious Synergy',
        archetype: 'High Value Alignment & Trust',
        badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        summary: 'Your partnership rests on exceptional emotional security, mutual respect, and aligned life values.',
        description: 'You and your partner demonstrate high relationship resilience. You navigate inevitable friction with empathy and emotional maturity, viewing yourselves as teammates against problems rather than opponents against each other.',
        strengths: ['High emotional safety', 'Strong conflict recovery', 'Unified long-term vision'],
        insights: ['Even in great relationships, continue investing in novel dates to keep romance vibrant.'],
        recommendations: [
          'Keep celebrating each other’s individual passions outside the relationship.',
          'Schedule an annual "Relationship State of the Union" to dream together for the upcoming year.'
        ]
      },
      {
        id: 'moderate',
        name: 'Complementary Pioneers',
        archetype: 'Dynamic Balance & Healthy Contrast',
        badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
        summary: 'You bring diverse perspectives that enrich one another through ongoing communication and growth.',
        description: 'Your differences are your greatest teachers. While you may have contrasting temperaments or financial habits, your mutual commitment allows you to balance each other out—one provides stability while the other provides adventure.',
        strengths: ['Diverse problem-solving lenses', 'Mutual broadening of horizons', 'Healthy individuality'],
        insights: ['Contrast is exciting, but requires continuous communication around non-negotiable values.'],
        recommendations: [
          'Establish explicit ground rules for recurring friction topics (money, family boundaries).',
          'Practice curious questioning: "Help me understand what that means to you."'
        ]
      },
      {
        id: 'growth',
        name: 'Growth-Seeking Realists',
        archetype: 'Active Calibration & Recalibration',
        badgeColor: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800',
        summary: 'Your relationship is encountering friction points that require intentional dialogue and renewed boundaries.',
        description: 'You and your partner may be experiencing misaligned expectations or recurring communication loops. Every lasting couple encounters seasons where the rules of the relationship need honest recalibration.',
        strengths: ['Opportunity for profound self-discovery', 'Unmasking of unresolved assumptions'],
        insights: ['Unspoken resentments grow in silence; open honest dialogue prevents bitter accumulation.'],
        recommendations: [
          'Choose a neutral, calm moment (not in the heat of an argument) to discuss core values.',
          'Focus on your own contribution to arguments rather than keeping score of the other’s flaws.'
        ]
      }
    ]
  }
];
