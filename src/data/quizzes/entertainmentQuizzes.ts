import { Quiz } from '../../types/quiz';

const cinemaTiers = [
  {
    minPercent: 90,
    maxPercent: 100,
    title: 'Hollywood Cinephile',
    badgeColor: 'bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800',
    description: 'Gold-standard film literacy! You have an encyclopedic knowledge of cinema, iconic quotes, and pop-culture references.',
    advice: 'Challenge fellow movie buffs to see if anyone can rival your cinema crown.'
  },
  {
    minPercent: 75,
    maxPercent: 89,
    title: 'Box Office Pro',
    badgeColor: 'bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400 border-fuchsia-200 dark:border-fuchsia-800',
    description: 'Awesome job! You clearly love films and recognized almost every hidden clue and trivia twist.',
    advice: 'Take a look at the movie emoji breakdowns below to complete your trivia mastery.'
  },
  {
    minPercent: 50,
    maxPercent: 74,
    title: 'Casual Moviegoer',
    badgeColor: 'bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-200 dark:border-pink-800',
    description: 'Good showing! You caught the blockbuster references and had fun with the challenges.',
    advice: 'Time for a movie marathon weekend to catch up on classic cinema!'
  },
  {
    minPercent: 0,
    maxPercent: 49,
    title: 'Film Novice',
    badgeColor: 'bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800',
    description: 'Some of these questions were tricky, but you’ve got a fantastic list of movies to add to your watchlist.',
    advice: 'Check out the answers and explanations below, then challenge your friends!'
  }
];

export const entertainmentQuizzes: Quiz[] = [
  {
    id: 'quiz-movie-character-match',
    slug: 'movie-character-match',
    title: 'Which Movie Character Matches Your Personality?',
    tagline: 'Are you Tony Stark, Hermione Granger, Neo, or Forrest Gump?',
    description: 'Cinema mirrors our deepest ambitions and moral codes. Answer situational questions to uncover which iconic film legend best reflects your temperament.',
    categorySlug: 'entertainment',
    categoryName: 'Entertainment',
    type: 'personality',
    estimatedTime: '4 min',
    difficulty: 'Easy',
    gradient: 'from-violet-600 via-fuchsia-600 to-pink-500',
    accentColor: 'violet',
    iconName: 'Clapperboard',
    playsCount: 39500,
    featured: true,
    trending: true,
    questions: [
      {
        id: 1,
        text: 'When confronted with a seemingly unwinnable dilemma, your signature move is:',
        options: [
          { text: 'Invent a futuristic technological device or out-negotiate everyone with charisma.', trait: 'ironman' },
          { text: 'Head straight to the library or database to research every historical precedent.', trait: 'hermione' },
          { text: 'Bend the rules of reality and follow intuition over programmed conventions.', trait: 'neo' },
          { text: 'Keep running steadfastly with genuine kindness and unwavering loyalty.', trait: 'forrest' }
        ]
      },
      {
        id: 2,
        text: 'What kind of sidekick or partner do you appreciate having by your side?',
        options: [
          { text: 'Someone loyal who keeps your ego in check and handles the logistics (like Pepper or Rhodey).', trait: 'ironman' },
          { text: 'Brave, loyal companions who need your intellectual guidance (like Harry and Ron).', trait: 'hermione' },
          { text: 'A wise mentor who believes in your destiny even before you do (like Morpheus).', trait: 'neo' },
          { text: 'A true childhood soulmate who appreciates your pure heart (like Jenny).', trait: 'forrest' }
        ]
      },
      {
        id: 3,
        text: 'If you had a famous one-liner or catchphrase, it would sound like:',
        options: [
          { text: '"Genius, billionaire, playboy, philanthropist."', trait: 'ironman' },
          { text: '"When in doubt, go to the library."', trait: 'hermione' },
          { text: '"I know kung fu... and I choose my own path."', trait: 'neo' },
          { text: '"Life is like a box of chocolates; you never know what you’re gonna get."', trait: 'forrest' }
        ]
      },
      {
        id: 4,
        text: 'What drives you when life gets exhausting and overwhelming?',
        options: [
          { text: 'Leaving an indelible legacy and proving skeptics wrong.', trait: 'ironman' },
          { text: 'The pursuit of justice, knowledge, and doing what is right.', trait: 'hermione' },
          { text: 'Freeing others from illusions and discovering what is authentic.', trait: 'neo' },
          { text: 'Keeping promises made to the people you hold dear.', trait: 'forrest' }
        ]
      },
      {
        id: 5,
        text: 'In your friend circle, what role do you naturally fill?',
        options: [
          { text: 'The ambitious ringleader with the bold ideas and witty banter.', trait: 'ironman' },
          { text: 'The planner who has organized the itinerary and backup options.', trait: 'hermione' },
          { text: 'The quiet observer who notices everything and speaks with conviction.', trait: 'neo' },
          { text: 'The loyal confidant who is always there with a warm smile.', trait: 'forrest' }
        ]
      }
    ],
    outcomes: [
      {
        id: 'ironman',
        name: 'Tony Stark (Iron Man)',
        archetype: 'The Charismatic Innovator',
        badgeColor: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
        summary: 'Brilliant, witty, audacious, and driven by inventive genius and courageous leadership.',
        description: 'Like Tony Stark, your mind moves at light speed. You possess unmatched wit, a flair for audacious innovation, and the courage to build revolutionary solutions with your own hands when the world needs a hero.',
        strengths: ['Inventive brilliance', 'High charismatic leadership', 'Unstoppable resilience'],
        insights: ['Remember to let others contribute before taking the whole burden onto your shoulders.'],
        recommendations: ['Balance high-octane work sprints with moments of quiet reflection with trusted friends.']
      },
      {
        id: 'hermione',
        name: 'Hermione Granger',
        archetype: 'The Intellectual Guardian',
        badgeColor: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
        summary: 'Fiercely intelligent, impeccably prepared, deeply ethical, and fiercely loyal.',
        description: 'You are the intellectual backbone of any endeavor. You believe that preparation, academic discipline, and unwavering moral courage conquer any darkness. Without your foresight, projects would derail.',
        strengths: ['Encyclopedic recall', 'Moral conviction', 'Unmatched preparation'],
        insights: ['Give yourself permission to be imperfect; your worth isn’t defined only by straight A’s.'],
        recommendations: ['Embrace spontaneous adventures without having to research every single detail in advance.']
      },
      {
        id: 'neo',
        name: 'Neo (The Matrix)',
        archetype: 'The Paradigm Shifter',
        badgeColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
        summary: 'Intuitive, philosophical, independent, and capable of breaking societal molds.',
        description: 'You look beyond superficial surfaces and question the underlying matrix of rules. You believe in personal awakening, authentic choice, and the courage to step outside the herd.',
        strengths: ['Philosophical insight', 'Fearless transformation', 'Quiet conviction'],
        insights: ['Staying grounded in physical reality prevents feelings of existential isolation.'],
        recommendations: ['Share your unique worldview with creative communities who appreciate bold vision.']
      },
      {
        id: 'forrest',
        name: 'Forrest Gump',
        archetype: 'The Pure-Hearted Champion',
        badgeColor: 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800',
        summary: 'Unconditionally kind, resilient, honest, and blessed with an inspiring pure heart.',
        description: 'In a cynical world, your simplicity, honesty, and boundless kindness are your greatest superpowers. You take life one day at a time, keep promises faithfully, and touch lives wherever you walk.',
        strengths: ['Unfaltering integrity', 'Pure empathy', 'Enduring determination'],
        insights: ['Ensure predatory or cynical individuals don’t take advantage of your generous spirit.'],
        recommendations: ['Never change your kindness; the world desperately needs your genuine warmth.']
      }
    ]
  },
  {
    id: 'quiz-guess-movie-from-emojis',
    slug: 'guess-movie-from-emojis',
    title: 'Guess the Movie from Emojis',
    tagline: 'Decipher the blockbuster film titles hidden behind cryptic emoji combinations.',
    description: 'Can you decode cinematic plots condensed into visual hieroglyphics? Test your visual lateral thinking and pop-culture decoding skills!',
    categorySlug: 'entertainment',
    categoryName: 'Entertainment',
    type: 'knowledge',
    estimatedTime: '3 min',
    difficulty: 'Medium',
    gradient: 'from-fuchsia-600 via-pink-600 to-rose-600',
    accentColor: 'fuchsia',
    iconName: 'Smile',
    playsCount: 44200,
    featured: true,
    trending: true,
    knowledgeTiers: cinemaTiers,
    questions: [
      {
        id: 1,
        text: 'Decode this movie: 🚢 🧊 💔 🌊 💎',
        options: [
          { text: 'Poseidon' },
          { text: 'Titanic' },
          { text: 'The Perfect Storm' },
          { text: 'Cast Away' }
        ],
        correctIndex: 1,
        explanation: 'James Cameron’s 1997 classic "Titanic" features the ill-fated ship, the iceberg, tragic romance, and the Heart of the Ocean diamond.'
      },
      {
        id: 2,
        text: 'Decode this movie: 🦁 👑 🌅 🐗 🦝',
        options: [
          { text: 'Madagascar' },
          { text: 'The Jungle Book' },
          { text: 'The Lion King' },
          { text: 'Zootopia' }
        ],
        correctIndex: 2,
        explanation: 'Disney’s "The Lion King" tells Simba’s journey to the throne alongside Timon (meerkat) and Pumbaa (warthog).'
      },
      {
        id: 3,
        text: 'Decode this movie: 🎈 🎈 🏠 👴 👦 🐕',
        options: [
          { text: 'Up' },
          { text: 'Toy Story' },
          { text: 'Inside Out' },
          { text: 'Peter Pan' }
        ],
        correctIndex: 0,
        explanation: 'Pixar’s "Up" follows elderly Carl Fredricksen lifting his house with balloons, joined by Wilderness Explorer Russell and Dug.'
      },
      {
        id: 4,
        text: 'Decode this movie: 💊 🕶️ 🥋 🐇 💻 🟢',
        options: [
          { text: 'Tron' },
          { text: 'Inception' },
          { text: 'The Matrix' },
          { text: 'Blade Runner' }
        ],
        correctIndex: 2,
        explanation: 'The red/blue pill, dark sunglasses, kung fu training, white rabbit, and cascading green digital rain all signify "The Matrix".'
      },
      {
        id: 5,
        text: 'Decode this movie: 🦖 🦕 🚙 🌴 🧬 ⚠️',
        options: [
          { text: 'Jurassic Park' },
          { text: 'King Kong' },
          { text: 'Godzilla' },
          { text: 'Land of the Lost' }
        ],
        correctIndex: 0,
        explanation: 'Steven Spielberg’s "Jurassic Park" features de-extinct dinosaurs recreated from mosquito DNA trapped in amber.'
      },
      {
        id: 6,
        text: 'Decode this movie: 👨‍🚀 🌽 ⏳ 🚀 🪐 🕳️',
        options: [
          { text: 'The Martian' },
          { text: 'Interstellar' },
          { text: 'Gravity' },
          { text: 'Arrival' }
        ],
        correctIndex: 1,
        explanation: 'Christopher Nolan’s "Interstellar" features dying corn crops on Earth, wormhole space travel, gravitational time dilation, and the Gargantua black hole.'
      }
    ]
  },
  {
    id: 'quiz-popular-movies-trivia',
    slug: 'popular-movies-trivia',
    title: 'How Well Do You Know Popular Movies?',
    tagline: 'Test your knowledge of record-breaking blockbusters, Oscar milestones, and classic quotes.',
    description: 'Do you know who directed landmark films, which movie took home the most Academy Awards, and which quotes are iconic? Test your cinema trivia prowess.',
    categorySlug: 'entertainment',
    categoryName: 'Entertainment',
    type: 'knowledge',
    estimatedTime: '4 min',
    difficulty: 'Medium',
    gradient: 'from-pink-600 via-purple-600 to-indigo-600',
    accentColor: 'pink',
    iconName: 'Film',
    playsCount: 28900,
    knowledgeTiers: cinemaTiers,
    questions: [
      {
        id: 1,
        text: 'Which film holds the record for highest-grossing film of all time at the worldwide box office (unadjusted)?',
        options: [
          { text: 'Avengers: Endgame' },
          { text: 'Avatar (2009)' },
          { text: 'Titanic' },
          { text: 'Star Wars: The Force Awakens' }
        ],
        correctIndex: 1,
        explanation: 'James Cameron’s "Avatar" has grossed over $2.92 billion globally across its original run and re-releases.'
      },
      {
        id: 2,
        text: 'In "The Lord of the Rings", who composed the celebrated, award-winning musical film score?',
        options: [
          { text: 'Hans Zimmer' },
          { text: 'John Williams' },
          { text: 'Howard Shore' },
          { text: 'Ennio Morricone' }
        ],
        correctIndex: 2,
        explanation: 'Howard Shore composed the legendary, intricate leitmotif-driven soundtrack for Peter Jackson’s trilogy, winning three Academy Awards.'
      },
      {
        id: 3,
        text: 'Which classic 1994 film famously features the line: "Get busy living, or get busy dying"?',
        options: [
          { text: 'Pulp Fiction' },
          { text: 'The Shawshank Redemption' },
          { text: 'Fight Club' },
          { text: 'Goodfellas' }
        ],
        correctIndex: 1,
        explanation: 'Andy Dufresne (Tim Robbins) speaks this unforgettable line to Red (Morgan Freeman) in "The Shawshank Redemption".'
      },
      {
        id: 4,
        text: 'What was the first feature-length animated movie produced completely with computer animation?',
        options: [
          { text: 'A Bug’s Life' },
          { text: 'Toy Story (1995)' },
          { text: 'Shrek' },
          { text: 'Monsters, Inc.' }
        ],
        correctIndex: 1,
        explanation: 'Pixar and Disney’s "Toy Story", directed by John Lasseter, debuted in November 1995 as the first entirely computer-animated feature film.'
      },
      {
        id: 5,
        text: 'Which director directed "Inception", "The Dark Knight", and "Oppenheimer"?',
        options: [
          { text: 'Denis Villeneuve' },
          { text: 'Christopher Nolan' },
          { text: 'David Fincher' },
          { text: 'Quentin Tarantino' }
        ],
        correctIndex: 1,
        explanation: 'British-American filmmaker Christopher Nolan directed all three landmark cinematic works.'
      }
    ]
  }
];
