export const DUMMY_DATA = [
  {
    id: '01',
    tittle: "Internet Is The Young Man",
    description: "lorem ipsum dolor sit amit and new dolor sit ,  amit and new dolo lorem ",
    location: "Puran Dhaka , 1220 , Road - 03",
    date: "2021-06-20",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    isFeatured: false,
  },
  {
    id: '02',
    tittle: "Internet Is The Young Man",
    description: "lorem ipsum dolor sit amit and new dolor sit ,  amit and new dolo lorem ",
    location: "Puran Dhaka , 1220 , Road - 03",
    date: "2021-02-20",
    image: "https://images.pexels.com/photos/614521/pexels-photo-614521.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    isFeatured: false,
  },
  {
    id: '03',
    tittle: "Internet Is The Young Man",
    description: "lorem ipsum dolor sit amit and new dolor sit ,  amit and new dolo lorem ",
    location: "Puran Dhaka , 1220 , Road - 03",
    date: "2021-01-20",
    image: "https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    isFeatured: true,
  },
  {
    id: '04',
    tittle: "Internet Is The Young Man",
    description: "lorem ipsum dolor sit amit and new dolor sit ,  amit and new dolo lorem ",
    location: "Puran Dhaka , 1220 , Road - 03",
    date: "2021-08-20",
    image: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    isFeatured: false,
  },
  {
    id: '05',
    tittle: "Network Is The Young Man",
    description: "lorem ipsum dolor sit amit and new dolor sit ,  amit and new dolo lorem ",
    location: "Puran Dhaka , 1220 , Road - 03",
    date: "2021-12-20",
    image: "https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    isFeatured: true,
  },
  {
    id: '06',
    tittle: "How to ceate Social network",
    description: "lorem ipsum dolor sit amit and new dolor sit ,  amit and new dolo lorem ",
    location: "Puran Dhaka , 1220 , Road - 03",
    date: "2021-05-20",
    image: "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    isFeatured: true,
  },
  {
    id: '07', 
    tittle: "New Video is now uploading",
    description: "lorem ipsum dolor sit amit and new dolor sit ,  amit and new dolo lorem ",
    location: "Puran Dhaka , 1220 , Road - 03",
    date: "2021-05-20",
    image: "https://images.pexels.com/photos/5474031/pexels-photo-5474031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    isFeatured: false,
  },
]

export const getFeaturedEvent = () => {
   return DUMMY_DATA.filter(event => event.isFeatured)
}

export const getAllEvent = () => {
  return DUMMY_DATA
}

export const getEventData = (id) => DUMMY_DATA.find(ev => ev.id == id)

export function getFilteredEvents(year,month) {
  let filteredEvents = DUMMY_DATA.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents
}