export interface PastPaper {
  id: number;
  title: string;
  gradient: string;
  link: string;
  arrow?: boolean;
}

export const pastPapersData: PastPaper[] = [
  {
    id: 1,
    title: "9TH",
    gradient: "from-cyan-300 to-blue-400",
     link: "/past-papers9",
    arrow: true,
  },
  {
    id: 2,
    title: "10TH",
    gradient: "from-green-400 to-lime-400",
    link: "/past/pastpaper10",
    arrow: true,
  },
  {
    id: 3,
    title: "11TH",
    gradient: "from-cyan-400 to-blue-500",
     link: "/past/pastpaper11",
    arrow: true,
  },
  {
    id: 4,
    title: "12TH",
    gradient: "from-amber-400 via-yellow-300 to-orange-400",
     link: "/past-papers/12th",
    arrow: true,
  },
];




