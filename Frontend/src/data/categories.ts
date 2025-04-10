import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'club',
    name: 'Club Jerseys',
    image: '/images/General/clubs3.jpg',
    subcategories: [
      {
        id: 'premier-league',
        name: 'Premier League',
        path: '/category/club/premier-league',
        subcategories: [
          { id: 'aston-villa', name: 'Aston Villa', path: '/category/club/premier-league/aston-villa' },
          { id: 'brighton-hove-albion', name: 'Brighton & Hove Albion', path: '/category/club/premier-league/brighton-hove-albion' },
          { id: 'crystal-palace', name: 'Crystal Palace', path: '/category/club/premier-league/crystal-palace' },
          { id: 'fc-arsenal', name: 'FC Arsenal', path: '/category/club/premier-league/fc-arsenal' },
          { id: 'fc-chelsea', name: 'FC Chelsea', path: '/category/club/premier-league/fc-chelsea' },
          { id: 'fc-everton', name: 'FC Everton', path: '/category/club/premier-league/fc-everton' },
          { id: 'fc-liverpool', name: 'FC Liverpool', path: '/category/club/premier-league/fc-liverpool' },
          { id: 'leicester-city', name: 'Leicester City', path: '/category/club/premier-league/leicester-city' },
          { id: 'manchester-city', name: 'Manchester City', path: '/category/club/premier-league/manchester-city' },
          { id: 'manchester-united', name: 'Manchester United', path: '/category/club/premier-league/manchester-united' },
          { id: 'newcastle-united', name: 'Newcastle United', path: '/category/club/premier-league/newcastle-united' },
          { id: 'tottenham-hotspur', name: 'Tottenham Hotspur', path: '/category/club/premier-league/tottenham-hotspur' },
          { id: 'west-ham-united', name: 'West Ham United', path: '/category/club/premier-league/west-ham-united' },
          { id: 'wolverhampton-wanderers', name: 'Wolverhampton Wanderers', path: '/category/club/premier-league/wolverhampton-wanderers' },
        ],
      },
      {
        id: 'bundesliga',
        name: 'Bundesliga',
        path: '/category/club/bundesliga',
        subcategories: [
          { id: '1-fsv-mainz-05', name: '1. FSV Mainz 05', path: '/category/club/bundesliga/1-fsv-mainz-05' },
          { id: '1-fc-koln', name: '1. FC Köln', path: '/category/club/bundesliga/1-fc-koln' },
          { id: '1-fc-union-berlin', name: '1. FC Union Berlin', path: '/category/club/bundesliga/1-fc-union-berlin' },
          { id: 'bayer-04-leverkusen', name: 'Bayer 04 Leverkusen', path: '/category/club/bundesliga/bayer-04-leverkusen' },
          { id: 'borussia-dortmund', name: 'Borussia Dortmund', path: '/category/club/bundesliga/borussia-dortmund' },
          { id: 'borussia-monchengladbach', name: 'Borussia Mönchengladbach', path: '/category/club/bundesliga/borussia-monchengladbach' },
          { id: 'eintracht-frankfurt', name: 'Eintracht Frankfurt', path: '/category/club/bundesliga/eintracht-frankfurt' },
          { id: 'fc-bayern-munchen', name: 'FC Bayern München', path: '/category/club/bundesliga/fc-bayern-munchen' },
          { id: 'hertha-bsc', name: 'Hertha BSC', path: '/category/club/bundesliga/hertha-bsc' },
          { id: 'rb-leipzig', name: 'RB Leipzig', path: '/category/club/bundesliga/rb-leipzig' },
          { id: 'sc-freiburg', name: 'SC Freiburg', path: '/category/club/bundesliga/sc-freiburg' },
          { id: 'sv-werder-bremen', name: 'SV Werder Bremen', path: '/category/club/bundesliga/sv-werder-bremen' },
          { id: 'vfb-stuttgart', name: 'VfB Stuttgart', path: '/category/club/bundesliga/vfb-stuttgart' },
          { id: 'vfl-bochum', name: 'VfL Bochum', path: '/category/club/bundesliga/vfl-bochum' },
          { id: 'vfl-wolfsburg', name: 'VfL Wolfsburg', path: '/category/club/bundesliga/vfl-wolfsburg' },
        ],
      },
      {
        id: 'la-liga',
        name: 'La Liga',
        path: '/category/club/la-liga',
        subcategories: [
          { id: 'atletico-madrid', name: 'Atlético Madrid', path: '/category/club/la-liga/atletico-madrid' },
          { id: 'athletic-bilbao', name: 'Athletic Bilbao', path: '/category/club/la-liga/athletic-bilbao' },
          { id: 'celta-vigo', name: 'Celta Vigo', path: '/category/club/la-liga/celta-vigo' },
          { id: 'espanyol-barcelona', name: 'Espanyol Barcelona', path: '/category/club/la-liga/espanyol-barcelona' },
          { id: 'fc-barcelona', name: 'FC Barcelona', path: '/category/club/la-liga/fc-barcelona' },
          { id: 'real-betis', name: 'Real Betis', path: '/category/club/la-liga/real-betis' },
          { id: 'real-madrid', name: 'Real Madrid', path: '/category/club/la-liga/real-madrid' },
          { id: 'real-sociedad', name: 'Real Sociedad', path: '/category/club/la-liga/real-sociedad' },
          { id: 'sevilla-fc', name: 'Sevilla FC', path: '/category/club/la-liga/sevilla-fc' },
          { id: 'valencia-cf', name: 'Valencia CF', path: '/category/club/la-liga/valencia-cf' },
          { id: 'villarreal-cf', name: 'Villarreal CF', path: '/category/club/la-liga/villarreal-cf' },
        ],
      },
      {
        id: 'ligue-1',
        name: 'Ligue 1',
        path: '/category/club/ligue-1',
        subcategories: [
          { id: 'as-monaco', name: 'AS Monaco', path: '/category/club/ligue-1/as-monaco' },
          { id: 'fc-nantes', name: 'FC Nantes', path: '/category/club/ligue-1/fc-nantes' },
          { id: 'losc-lille', name: 'LOSC Lille', path: '/category/club/ligue-1/losc-lille' },
          { id: 'montpellier-hsc', name: 'Montpellier HSC', path: '/category/club/ligue-1/montpellier-hsc' },
          { id: 'olympique-lyonnais', name: 'Olympique Lyonnais', path: '/category/club/ligue-1/olympique-lyonnais' },
          { id: 'olympique-marseille', name: 'Olympique Marseille', path: '/category/club/ligue-1/olympique-marseille' },
          { id: 'paris-saint-germain', name: 'Paris Saint-Germain (PSG)', path: '/category/club/ligue-1/paris-saint-germain' },
          { id: 'rc-lens', name: 'RC Lens', path: '/category/club/ligue-1/rc-lens' },
          { id: 'rc-strasbourg', name: 'RC Strasbourg', path: '/category/club/ligue-1/rc-strasbourg' },
          { id: 'stade-de-reims', name: 'Stade de Reims', path: '/category/club/ligue-1/stade-de-reims' },
          { id: 'stade-rennais', name: 'Stade Rennais', path: '/category/club/ligue-1/stade-rennais' },
        ],
      },
      {
        id: 'serie-a',
        name: 'Serie A',
        path: '/category/club/serie-a',
        subcategories: [
          { id: 'ac-florenz', name: 'AC Florenz', path: '/category/club/serie-a/ac-florenz' },
          { id: 'ac-mailand', name: 'AC Mailand', path: '/category/club/serie-a/ac-mailand' },
          { id: 'as-rom', name: 'AS Rom', path: '/category/club/serie-a/as-rom' },
          { id: 'atalanta-bergamo', name: 'Atalanta Bergamo', path: '/category/club/serie-a/atalanta-bergamo' },
          { id: 'fc-turin', name: 'FC Turin', path: '/category/club/serie-a/fc-turin' },
          { id: 'inter-mailand', name: 'Inter Mailand', path: '/category/club/serie-a/inter-mailand' },
          { id: 'juventus-turin', name: 'Juventus Turin', path: '/category/club/serie-a/juventus-turin' },
          { id: 'lazio-rom', name: 'Lazio Rom', path: '/category/club/serie-a/lazio-rom' },
          { id: 'ssc-neapel', name: 'SSC Neapel', path: '/category/club/serie-a/ssc-neapel' },
        ],
      },
    ],
  },
  {
    id: 'international',
    name: 'International Jerseys',
    image: '/images/General/International1.jpg'
  },
  {
    id: 'retro',
    name: 'Retro Jerseys',
    image: '/images/General/Retro.jpg'
  },
  {
    id: 'special',
    name: 'Special Jerseys',
    image: '/images/General/Special.jpg'
  },
  {
    id: 'bestsellers',
    name: 'Best Sellers',
    image: '/images/General/Bestsellers.jpg'
  },
  {
    id: 'newarrivals',
    name: 'New Arrivals',
    image: '/image/General/newarrivals.jpg'
  },
  {
    id:'germany',
    name:'Germany',
    image:'/image/General/newarrivals.jpg'
  }
];