import type { WorkoutPlan, Achievements, GameState } from './types';

export const WORKOUTS: WorkoutPlan = {
  daily: [ { name: 'Respiración Supina 90/90', sets: '2 series x 8 respiraciones', rpe: 'RPE 5', video: 'https://www.youtube.com/watch?v=SnjCyg6jODs' }, { name: 'Gato-Camello', sets: '1 serie x 12 reps', rpe: 'RPE 5', video: 'https://www.youtube.com/watch?v=K9_jYv5oG6g' }, { name: 'Bird-Dog', sets: '2 series x 8 reps/lado', rpe: 'RPE 5', video: 'https://www.youtube.com/watch?v=wiFNA3sqjCA' }, { name: 'Puente de Glúteos', sets: '2 series x 15 reps', rpe: 'RPE 5', video: 'https://www.youtube.com/watch?v=h-cdM00_p4Q' }, { name: 'Masaje de Cicatriz', sets: '2-3 minutos', rpe: 'N/A', video: '#' } ],
  day1: [ { name: 'Sentadilla Goblet', sets: '3 x 8-10', rpe: 'RPE 6-7', video: 'https://www.youtube.com/watch?v=MeW_B_4G5H0' }, { name: 'Remo Sentado en Máquina', sets: '3 x 10-12', rpe: 'RPE 7-8', video: 'https://www.youtube.com/watch?v=pM04_3PNIP0' }, { name: 'Press Pectoral en Máquina', sets: '3 x 10-12', rpe: 'RPE 7-8', video: 'https://www.youtube.com/watch?v=t-pI-GwaaCE' }, { name: 'Curl Femoral Tumbado', sets: '3 x 12-15', rpe: 'RPE 7-8', video: 'https://www.youtube.com/watch?v=AbUa346e_tQ' }, { name: 'Plancha Frontal', sets: '3 x 30-45 seg', rpe: 'Tensión constante', video: 'https://www.youtube.com/watch?v=d0atQ64dhb8' }, { name: 'Cardio: Caminata en Cinta', sets: '15-20 min', rpe: 'RPE 5-6 (8-12% incl.)', video: '#' } ],
  day2: [ { name: 'Prensa de Piernas', sets: '3 x 10-12', rpe: 'RPE 6-7', video: 'https://www.youtube.com/watch?v=zp5l5eLp_Gg' }, { name: 'Jalón al Pecho', sets: '3 x 10-12', rpe: 'RPE 7-8', video: 'https://www.youtube.com/watch?v=17D1j-K8OQo' }, { name: 'Press de Hombros Sentado', sets: '3 x 10-12', rpe: 'RPE 7-8', video: 'https://www.youtube.com/watch?v=4Va0kPSJbLA' }, { name: 'Face Pull con Cuerda', sets: '3 x 15-20', rpe: 'RPE 7', video: 'https://www.youtube.com/watch?v=0P41hUwLd3w' }, { name: 'Paseo del Granjero', sets: '3 x 30-40 m', rpe: 'Desafiante', video: 'https://www.youtube.com/watch?v=4Crw31i0A-E' }, { name: 'Cardio: Remo Ergómetro', sets: '10-15 min', rpe: 'RPE 6', video: 'https://www.youtube.com/watch?v=L2nCy2b4h6M' } ],
  day3: [ { name: 'Peso Muerto Rumano', sets: '3 x 10-12', rpe: 'RPE 6-7', video: 'https://www.youtube.com/watch?v=FQK6KwbSq_Q' }, { name: 'Remo a una Mano', sets: '3 x 10-12', rpe: 'RPE 7-8', video: 'https://www.youtube.com/watch?v=LNEsD9Z7p2E' }, { name: 'Hip Thrust', sets: '3 x 12-15', rpe: 'RPE 7-8', video: 'https://www.youtube.com/watch?v=h-cdM00_p4Q' }, { name: 'Rotación Externa (Hombro)', sets: '3 x 15', rpe: 'RPE 6', video: 'https://www.youtube.com/watch?v=uP21cfAhg3E' }, { name: 'Jefferson Curl', sets: '2 x 8', rpe: 'RPE 3-4 (Movilidad)', video: 'https://www.youtube.com/watch?v=0h-iwRJRwTY' }, { name: 'Cardio Opcional', sets: '15 min', rpe: 'RPE 5-6', video: '#' } ]
};

export const INITIAL_ACHIEVEMENTS: Achievements = {
  'first_daily': { name: 'Un Buen Comienzo', desc: 'Completa tu primera rutina diaria.', unlocked: false, icon: 'fa-play-circle' },
  'first_strength': { name: '¡A Mover Hierro!', desc: 'Completa tu primer día de fuerza.', unlocked: false, icon: 'fa-dumbbell' },
  'streak_3': { name: 'Creando el Hábito', desc: 'Mantén una racha de 3 días seguidos.', unlocked: false, icon: 'fa-calendar-day' },
  'streak_7': { name: 'Imparable', desc: 'Mantén una racha de 7 días seguidos.', unlocked: false, icon: 'fa-calendar-week' },
  'level_5': { name: 'Veterano de la Recuperación', desc: 'Alcanza el nivel 5.', unlocked: false, icon: 'fa-star' }
};

export const INITIAL_GAME_STATE: GameState = {
  xp: 0,
  level: 1,
  dailyStreak: 0,
  lastDailyCompletion: null,
  completedWorkouts: {},
  achievements: INITIAL_ACHIEVEMENTS,
  chatHistory: [],
  painDiary: {}
};