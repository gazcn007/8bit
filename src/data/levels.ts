import beijingBg from '../assets/backgrounds/Beijing.png';
import stanfordBg from '../assets/backgrounds/Stanford.jpg';
import montrealBg from '../assets/backgrounds/Montreal.jpg';
import vancouverBg from '../assets/backgrounds/Vancouver.jpg';

// Level 1
import kidImage from '../assets/pic/kid.jpg';
import kidImage1 from '../assets/pic/kid1.jpg';
import kidViolin from '../assets/pic/kid-violin.jpg';

// Level 2

// Level 3
import TableauPat from '../assets/pic/TableauPat.jpg';
import TableauPublic from '../assets/pic/TableauPublic.jpg';
import TableauTeam from '../assets/pic/TableauTeam.jpeg';

// npcs
import solaire from '../assets/characters/npcs/solaire.gif';
import luigi from '../assets/characters/npcs/luigi.gif';
import yoda from '../assets/characters/npcs/yoda.gif';
import gandolf from '../assets/characters/npcs/gandolf.gif';
import loco from '../assets/characters/npcs/loco.gif';
import loco2 from '../assets/characters/npcs/loco2.gif';
import kirby from '../assets/characters/npcs/kirby.gif';
import tsuny from '../assets/characters/npcs/tsuny.gif';
import pikachu from '../assets/characters/npcs/pikachu.gif';
import pyro from '../assets/characters/npcs/pyro.gif';
import peach from '../assets/characters/peach.gif';
import ninja from '../assets/characters/npcs/ninja.gif';
import ironman from '../assets/characters/npcs/ironman.gif';

export type Event = {
  type: 'text' | 'image' | 'video';
  content: string;
  images?: string[];
  video?: string;
};

export type Block = {
  position: number; // characterPosition percentage
  event: Event;
};

export type NPC = {
  position: number; // characterPosition percentage
  sprite: string; // path to NPC sprite/gif
  facing?: 'left' | 'right'; // direction NPC is facing (default: 'right')
  size?: string; // Tailwind height class (e.g., 'h-24', 'h-32', 'h-40') - default: 'h-32'
};

export type Level = {
  id: number;
  name: string;
  background: string;
  mission: string;
  year: string;
  blocks: Block[];
  npcs?: NPC[];
};

// Collect all images for preloading
export const getAllEventImages = (): string[] => {
  const images: string[] = [];
  levels.forEach((level) => {
    level.blocks.forEach((block) => {
      if (block.event.images) {
        images.push(...block.event.images);
      }
    });
  });
  return images;
};

export const levels: Level[] = [
  {
    id: 1,
    name: 'BEIJING',
    background: beijingBg,
    mission: 'I was born in Beijing, China',
    year: '1995',
    blocks: [
      {
        position: 60,
        event: {
          type: 'text',
          content: 'Beijing, China -This is where my journey began.',
          images: [kidImage, kidImage1],
        },
      },
      {
        position: 130,
        event: {
          type: 'text',
          content:
            'I was the only child in my family, my parents devoted all their love and resources to me and my education.',
          images: [kidViolin],
        },
      },
    ],
  },
  {
    id: 2,
    name: 'MONTREAL',
    background: montrealBg,
    mission: 'I was born in Montreal, Canada',
    year: '1995',
    blocks: [
      {
        position: 85,
        event: {
          type: 'text',
          content: 'Montreal, Canada - This is where I grew up.',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Pacific Northwest',
    background: vancouverBg,
    mission: 'Career Journey',
    year: '2017',
    blocks: [
      {
        position: 115,
        event: {
          type: 'text',
          content:
            'My first job was at Tableau Software, a data analytics company founded by Stanford Professor, now Turing award winner, Pat Hanrahan. I was the main developer for the Tableau Public.',
          images: [TableauPat, TableauPublic, TableauTeam],
        },
      },
    ],
    npcs: [
      {
        position: 160,
        sprite: peach,
        facing: 'right',
        size: 'h-24',
      },
    ],
  },
  {
    id: 4,
    name: 'STANFORD',
    background: stanfordBg,
    mission: 'Masters in Learning, Design, and Technology',
    year: '2025',
    blocks: [
      {
        position: 32,
        event: {
          type: 'text',
          content:
            'Stanford University - where I deepened my understanding of computer science.',
        },
      },
      {
        position: 120,
        event: {
          type: 'text',
          content:
            'The knowledge gained here became the foundation of my career.',
        },
      },
    ],
    npcs: [
      {
        position: 90,
        sprite: kirby,

        facing: 'left',
        size: 'h-24',
      },
      {
        position: 95,
        sprite: luigi,
        facing: 'left',
        size: 'h-32',
      },
      {
        position: 100,
        sprite: ninja,
        facing: 'left',
        size: 'h-24',
      },
      {
        position: 105,
        sprite: yoda,
        facing: 'right',
        size: 'h-24',
      },
      {
        position: 110,
        sprite: tsuny,
        facing: 'right',
        size: 'h-24',
      },
      {
        position: 115,
        sprite: loco,
        facing: 'left',
        size: 'h-16',
      },
      {
        position: 120,
        facing: 'right',
        sprite: solaire,
        size: 'h-28',
      },
      {
        position: 125,
        sprite: pyro,
        facing: 'right',
        size: 'h-32',
      },
      {
        position: 130,
        sprite: loco2,
        facing: 'right',
        size: 'h-16',
      },
      {
        position: 135,
        sprite: gandolf,
        facing: 'right',
        size: 'h-24',
      },
      {
        position: 140,
        sprite: pikachu,
        facing: 'right',
        size: 'h-20',
      },
      {
        position: 145,
        sprite: ironman,
        facing: 'right',
        size: 'h-28',
      },
    ],
  },
];
