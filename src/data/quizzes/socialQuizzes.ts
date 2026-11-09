import { Quiz } from '../../types/quiz';

export const socialQuizzes: Quiz[] = [
  {
    id: 'quiz-how-well-do-friends-know-you',
    slug: 'how-well-do-friends-know-you',
    title: 'How Well Do Your Friends Know You?',
    tagline: 'Are you an open book or an enigma wrapped in a mystery?',
    description: 'We all show different facets of our personality to the world. Discover how transparent your social persona is and generate a challenge for your best friends to test their accuracy!',
    categorySlug: 'friends-social',
    categoryName: 'Friends & Social',
    type: 'personality',
    estimatedTime: '3 min',
    difficulty: 'Easy',
    gradient: 'from-emerald-600 via-teal-500 to-blue-600',
    accentColor: 'emerald',
    iconName: 'Users',
    playsCount: 33100,
    featured: true,
    trending: true,
    questions: [
      {
        id: 1,
        text: 'When something genuinely bothers or upsets you, how obvious is it to your friends?',
        options: [
          { text: 'Instantly obvious—I wear my heart on my sleeve and share my feelings freely.', trait: 'open' },
          { text: 'Only my closest 1-2 confidants notice the subtle shift in my tone.', trait: 'selective' },
          { text: 'I mask it with jokes and cheerful energy so nobody worries about me.', trait: 'deflector' },
          { text: 'Nobody ever notices; I retreat into private solitude until I have processed it.', trait: 'vault' }
        ]
      },
      {
        id: 2,
        text: 'If your friends had to name your biggest pet peeve, how accurately would they guess?',
        options: [
          { text: '100%—I rant about it regularly so everyone knows to avoid it.', trait: 'open' },
          { text: 'They know what annoys me because they know my pet peeves in detail.', trait: 'selective' },
          { text: 'They might guess wrong because I rarely complain in public.', trait: 'deflector' },
          { text: 'They have no idea; I am very tolerant externally even when annoyed internally.', trait: 'vault' }
        ]
      },
      {
        id: 3,
        text: 'How much do your friends know about your childhood memories and secret dreams?',
        options: [
          { text: 'Almost everything—I love deep nostalgic late-night storytelling.', trait: 'open' },
          { text: 'Only the people who have earned my deep trust over several years.', trait: 'selective' },
          { text: 'They know the funny, entertaining stories, but few deeply personal ones.', trait: 'deflector' },
          { text: 'Very little—I keep my past and private dreams sacredly guarded.', trait: 'vault' }
        ]
      },
      {
        id: 4,
        text: 'If a friend planned a surprise gift or celebration for you, what would happen?',
        options: [
          { text: 'They would nail it completely because my tastes are well broadcast.', trait: 'open' },
          { text: 'A close friend would get it right; a casual friend would miss the mark.', trait: 'selective' },
          { text: 'I would act overjoyed regardless to ensure they feel appreciated.', trait: 'deflector' },
          { text: 'Surprises make me uncomfortable; I prefer keeping plans controlled.', trait: 'vault' }
        ]
      },
      {
        id: 5,
        text: 'What do you desire most from your social circle right now?',
        options: [
          { text: 'Frequent hangouts, group chats buzzing, and spontaneous shared adventures.', trait: 'open' },
          { text: 'Quality one-on-one time with high trust and low maintenance expectations.', trait: 'selective' },
          { text: 'Fun, lighthearted shared moments that distract from everyday stress.', trait: 'deflector' },
          { text: 'Respect for my autonomy and zero pressure to attend social obligations.', trait: 'vault' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'open',
        name: 'The Open Book',
        archetype: 'Transparent & Expressive',
        badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        summary: 'Your friends know you inside and out. What you see is authentically what you get!',
        description: 'You live without social masks. Your emotions, quirks, preferences, and passions are shared openly with your circle. People love you for your disarming authenticity and direct communication.',
        strengths: ['High emotional transparency', 'Effortless connection', 'Zero games or ambiguity'],
        insights: ['Remember to check in on friends who might not be as naturally expressive as you.'],
        recommendations: [
          'Send this quiz to your best friend to see if they can predict your answers with 100% accuracy!'
        ]
      },
      {
        id: 'selective',
        name: 'The Inner Circle Guardian',
        archetype: 'Discerning & Devoted',
        badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
        summary: 'You keep your true self reserved for an elite, hand-picked inner circle of loyal companions.',
        description: 'Casual acquaintances see your polite surface, but your true depths are unlocked only by the chosen few who have proved their loyalty over time. Your inner circle knows you intimately.',
        strengths: ['Fierce inner-circle loyalty', 'High relational quality', 'Guarded discretion'],
        insights: ['Occasionally allow new acquaintances a small glimpse past your defenses.'],
        recommendations: [
          'Challenge your top 2 closest friends and see who truly knows your inner world better.'
        ]
      },
      {
        id: 'deflector',
        name: 'The Social Entertainer',
        archetype: 'Charming & Protective',
        badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
        summary: 'You keep conversations lively with humor and charm, often deflecting attention away from your own vulnerabilities.',
        description: 'You are often the life of the group, bringing laughter, witty commentary, and warmth. However, you use humor as a shield to prevent people from seeing when you are struggling.',
        strengths: ['Charismatic presence', 'Social tension de-escalation', 'Generous entertainer'],
        insights: ['True intimacy requires letting people comfort you when the curtain falls.'],
        recommendations: [
          'Practice telling a trusted friend when you feel low without turning it into a punchline.'
        ]
      },
      {
        id: 'vault',
        name: 'The Enigmatic Vault',
        archetype: 'Mysterious & Self-Contained',
        badgeColor: 'bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800',
        summary: 'A fascinating mystery. You process life internally and share very little of your personal ledger.',
        description: 'You hold your cards close to your chest. Even people who have known you for years find themselves discovering surprising new layers. You value independence and self-reliance above all.',
        strengths: ['Iron-clad self-reliance', 'Discretion with secrets', 'Calm stoic presence'],
        insights: ['Extreme self-containment can leave loved ones feeling shut out.'],
        recommendations: [
          'Challenge your friends to take this quiz—their guesses might surprise you!'
        ]
      }
    ]
  },
  {
    id: 'quiz-introvert-or-extrovert',
    slug: 'introvert-or-extrovert',
    title: 'Introvert or Extrovert?',
    tagline: 'Discover where you fall on the introversion, extroversion, and ambiversion spectrum.',
    description: 'This is not just about shyness versus talkativeness; it is about how your neurobiology recharges energy and processes stimulation. Discover your exact social energy blueprint.',
    categorySlug: 'friends-social',
    categoryName: 'Friends & Social',
    type: 'personality',
    estimatedTime: '4 min',
    difficulty: 'Easy',
    gradient: 'from-teal-600 via-cyan-600 to-blue-600',
    accentColor: 'teal',
    iconName: 'Compass',
    playsCount: 46100,
    featured: true,
    trending: true,
    questions: [
      {
        id: 1,
        text: 'After an intense, highly stimulating social weekend (wedding, festival, reunion), you feel:',
        options: [
          { text: 'Thoroughly drained—I need 24-48 hours in silence to reset my brain.', trait: 'introvert' },
          { text: 'A mixture: I enjoyed it immensely, but am ready for a peaceful evening.', trait: 'ambivert' },
          { text: 'Electrified and energized! I am already checking group chats for what is next.', trait: 'extrovert' },
          { text: 'Restless: I prefer one-on-one deep conversations over large group crowds.', trait: 'introvert' }
        ]
      },
      {
        id: 2,
        text: 'How do you formulate your best ideas and process complex dilemmas?',
        options: [
          { text: 'Through quiet internal reflection, journaling, or solitary thinking.', trait: 'introvert' },
          { text: 'I like thinking alone first, then bounce the idea off a trusted partner.', trait: 'ambivert' },
          { text: 'By talking out loud and brainstorming dynamically in a group setting.', trait: 'extrovert' },
          { text: 'Debating with others fuels my mental momentum.', trait: 'extrovert' }
        ]
      },
      {
        id: 3,
        text: 'When entering a bustling networking event or crowded party where you know few people:',
        options: [
          { text: 'I locate a quiet corner, observe first, or hope someone approaches me.', trait: 'introvert' },
          { text: 'I gravitate toward one interesting person and enjoy a deep 30-minute conversation.', trait: 'ambivert' },
          { text: 'I work the room naturally, introduce myself to groups, and make instant friends.', trait: 'extrovert' },
          { text: 'I set a mental timer and leave as soon as social etiquette allows.', trait: 'introvert' }
        ]
      },
      {
        id: 4,
        text: 'Your phone rings unexpectedly from an unsaved or casual number. Your reaction:',
        options: [
          { text: 'Watch it ring until it stops, then wait for them to text or leave voicemail.', trait: 'introvert' },
          { text: 'Check who it might be, then text: "Hey, what’s up?" when convenient.', trait: 'ambivert' },
          { text: 'Pick up immediately with an energetic hello!', trait: 'extrovert' },
          { text: 'Put phone face down; unexpected voice calls feel intrusive.', trait: 'introvert' }
        ]
      },
      {
        id: 5,
        text: 'Which description best matches your ideal living environment?',
        options: [
          { text: 'A serene sanctuary where I can close the door to the world and recharge.', trait: 'introvert' },
          { text: 'A comfortable home with a steady mix of quiet nights and weekend dinner parties.', trait: 'ambivert' },
          { text: 'An open-door hub where friends drop by frequently and music is playing.', trait: 'extrovert' },
          { text: 'A cozy retreat nestled in nature with books and minimal outside noise.', trait: 'introvert' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'introvert',
        name: 'The Reflective Introvert',
        archetype: 'Internal Battery & Depth',
        badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
        summary: 'You draw power from solitude, deep contemplation, and intimate one-on-one relationships.',
        description: 'Your nervous system is finely tuned. You thrive in rich inner landscapes and recharge through quiet activities. While you deeply value relationships, extensive superficial small talk and noisy crowds deplete your energy reserves.',
        strengths: ['Deep listening capacity', 'Self-awareness', 'Thoughtful observation', 'Concentrated focus'],
        insights: ['Never apologize for requiring quiet time to recharge—it is your biological operating system.'],
        recommendations: [
          'Protect your calendar from back-to-back social commitments with buffer recharge blocks.',
          'Focus on deepening your existing intimate friendships rather than accumulating casual contacts.'
        ]
      },
      {
        id: 'extrovert',
        name: 'The Vibrant Extrovert',
        archetype: 'External Dynamo & Catalyst',
        badgeColor: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800',
        summary: 'You recharge by engaging with people, dynamic environments, and shared social momentum.',
        description: 'You are energized by the world around you. Solitude for too long leaves you feeling restless and under-stimulated. You process thoughts out loud, inspire groups with your vitality, and effortlessly connect people.',
        strengths: ['Charismatic momentum', 'Rapid rapport building', 'Infectious optimism', 'Social bravery'],
        insights: ['Remember to pause and listen to introverted friends who may need time to formulate thoughts.'],
        recommendations: [
          'Channel your social energy into organizing community gatherings, masterminds, or sports leagues.',
          'Practice quiet mindfulness for 10 minutes a day to cultivate inner stillness.'
        ]
      },
      {
        id: 'ambivert',
        name: 'The Balanced Ambivert',
        archetype: 'The Social Chameleon',
        badgeColor: 'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800',
        summary: 'You possess the rare superpower of moving fluidly between solitary focus and energetic socializing.',
        description: 'You are the ultimate bridge between worlds. You can be the life of the party on Saturday and happily spend all Sunday alone reading without feeling lonely. Your adaptability makes you widely understood and appreciated by both camps.',
        strengths: ['Contextual flexibility', 'High social empathy', 'Balanced listening and speaking'],
        insights: ['Because you can do both, be mindful not to over-commit to social events when your inner introvert needs rest.'],
        recommendations: [
          'Listen to your daily internal barometer to choose whether tonight calls for quiet or company.',
          'Help bridge the gap in friend groups between energetic extroverts and reserved introverts.'
        ]
      }
    ]
  },
  {
    id: 'quiz-what-kind-of-friend-are-you',
    slug: 'what-kind-of-friend-are-you',
    title: 'What Kind of Friend Are You?',
    tagline: 'Are you the Ride-or-Die Protector, the Hype Champion, the Wise Counselor, or the Chaos Buddy?',
    description: 'Every great friendship circle relies on complementary archetypes. Take this test to find out what distinct value and energy you contribute to your closest friendships.',
    categorySlug: 'friends-social',
    categoryName: 'Friends & Social',
    type: 'personality',
    estimatedTime: '3 min',
    difficulty: 'Easy',
    gradient: 'from-cyan-600 via-teal-600 to-emerald-600',
    accentColor: 'cyan',
    iconName: 'Sparkles',
    playsCount: 29800,
    questions: [
      {
        id: 1,
        text: 'Your friend calls you crying at 2:00 AM after a tough breakup. What is your immediate reaction?',
        options: [
          { text: 'Grab your keys, show up at their door with ice cream, and stay until they fall asleep.', trait: 'protector' },
          { text: 'Listen for hours, validate their pain, and offer grounded, philosophical wisdom.', trait: 'counselor' },
          { text: 'Remind them of their immense worth, beauty, and how the ex never deserved them.', trait: 'hype' },
          { text: 'Distract them with hilarious memes, funny stories, and plan an unforgettable weekend getaway.', trait: 'adventure' }
        ]
      },
      {
        id: 2,
        text: 'Your friend achieves a massive career milestone or gets engaged. Your celebratory style:',
        options: [
          { text: 'Help them celebrate practically: handle party setup or make sure they stay hydrated.', trait: 'protector' },
          { text: 'Write a heartfelt letter detailing how inspired you are by their dedication.', trait: 'counselor' },
          { text: 'Be their biggest cheerleader, shouting congratulations and posting loving tributes.', trait: 'hype' },
          { text: 'Order the finest bottle of bubbly and rally the entire squad for an epic night out.', trait: 'adventure' }
        ]
      },
      {
        id: 3,
        text: 'What do friends say they appreciate most about having you in their life?',
        options: [
          { text: '"You are the most reliable person I know; I can count on you with my life."', trait: 'protector' },
          { text: '"You give the best advice and never judge my mistakes."', trait: 'counselor' },
          { text: '"You always believe in me and boost my confidence when I doubt myself."', trait: 'hype' },
          { text: '"Life is never boring with you; you turn ordinary days into memories."', trait: 'adventure' }
        ]
      },
      {
        id: 4,
        text: 'When there is tension or drama within the broader friend group, your role is:',
        options: [
          { text: 'Shielding the innocent party and ensuring boundaries are enforced.', trait: 'protector' },
          { text: 'Mediating calmly between both sides to help them communicate honestly.', trait: 'counselor' },
          { text: 'Keeping morale high and reminding everyone how much they love each other.', trait: 'hype' },
          { text: 'Steering the group away from drama toward fun activities that clear the air.', trait: 'adventure' }
        ]
      },
      {
        id: 5,
        text: 'If your friendship style was summarized in one sentence:',
        options: [
          { text: '"I will defend you in rooms you haven’t even entered."', trait: 'protector' },
          { text: '"I will listen to what your heart is saying underneath the words."', trait: 'counselor' },
          { text: '"I am your loudest fan and will never let you settle for less."', trait: 'hype' },
          { text: '"Let’s make memories we will laugh about when we are eighty."', trait: 'adventure' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'protector',
        name: 'The Ride-or-Die Protector',
        archetype: 'Unshakable Loyalty & Defense',
        badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        summary: 'Your loyalty is legendary. Friends know you will drop everything to defend and support them.',
        description: 'You are the bedrock of your friendship circle. When life gets brutal, you don’t offer platitudes—you show up in person. You protect your friends fiercely and keep their secrets in an iron vault.',
        strengths: ['Unconditional reliability', 'Protective instincts', 'Action-oriented care'],
        insights: ['Make sure you allow your friends to support you when you are the one in need.'],
        recommendations: [
          'Send this to your friends with the caption: "Can confirm?" and see what they say!'
        ]
      },
      {
        id: 'counselor',
        name: 'The Wise Counselor',
        archetype: 'Deep Empathy & Perspective',
        badgeColor: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
        summary: 'The emotional anchor. Friends seek you out for non-judgmental guidance and deep clarity.',
        description: 'You possess rare emotional maturity and listening acumen. When friends are confused or heartbroken, your calm perspective helps untangle the chaos and illuminates the right path forward.',
        strengths: ['Empathetic attunement', 'Nuanced perspective', 'Conflict mediation'],
        insights: ['Take care not to carry everyone else’s emotional baggage into your own bedtime thoughts.'],
        recommendations: [
          'Remember that sometimes friends just need you to be angry with them before being wise.'
        ]
      },
      {
        id: 'hype',
        name: 'The Ultimate Hype Champion',
        archetype: 'Infectious Confidence & Affirmation',
        badgeColor: 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800',
        summary: 'The heart and spark plug. You celebrate your friends with unmatched enthusiasm and love.',
        description: 'You see the brilliance in your friends that they frequently overlook in themselves. Your encouragement gives people the courage to apply for the dream job, ask out the crush, and walk with their heads high.',
        strengths: ['Infectious positivity', 'Confidence boosting', 'Pure celebration'],
        insights: ['Even champions need encouragement; allow friends to hype you up too!'],
        recommendations: [
          'Never stop sending those surprise morning encouragement texts—they change people’s days.'
        ]
      },
      {
        id: 'adventure',
        name: 'The Spontaneous Spark',
        archetype: 'Joy, Laughter & Adventure',
        badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
        summary: 'The catalyst for unforgettable memories. You inject spontaneity, laughter, and fun into every season.',
        description: 'You prevent friendships from stagnating into routine. You are the one proposing the road trip, discovering the quirky dessert spot, or finding humor in situations that would otherwise be stressful.',
        strengths: ['Playful vitality', 'Spontaneous memory-making', 'Stress reduction'],
        insights: ['Ensure you are present for the quiet, somber moments as well as the celebrations.'],
        recommendations: [
          'Plan a spontaneous gathering this month to bring your favorite people together.'
        ]
      }
    ]
  }
];
