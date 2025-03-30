export interface FloorPlan {
  name: string;
  specs: string;
  image: string;
  link: string;
  price: string;
  squareFeet?: string;
  description?: string;
  features?: string[];
  floorPlanImage?: string;
  stories?: string;
}

export const featuredFloorPlans: FloorPlan[] = [
  {
    name: "The Whistler Plan",
    specs: "Studio, 1 Bath",
    image: "/lovable-uploads/74770311-8fd1-4af1-a815-b7354b0ad933.png",
    link: "/plans/whistler",
    price: "$150,000",
    squareFeet: "400 ft²",
    description: "This 400 sq ft studio layout is designed to maximize functionality and comfort within a compact footprint, making it an excellent option for modern, space-conscious living. The open-concept design seamlessly integrates the living, kitchen, and dining areas, creating a bright and welcoming space perfect for relaxation or entertaining.",
    features: [
      "Open and Versatile Living Space",
      "Cozy Sleeping Area",
      "Efficient Kitchen Layout",
      "Convenient Bathroom",
      "Smart Storage Solutions"
    ],
    floorPlanImage: "/lovable-uploads/6ae9d21a-62c8-44a9-90e3-c505c5fc591b.png",
    stories: "One Story"
  },
  {
    name: "The Spruce Plan",
    specs: "Studio, 1 Bath",
    image: "/lovable-uploads/27deba99-160c-44d5-9f53-b67e547a480d.png",
    link: "/plans/spruce",
    price: "$120,000",
    squareFeet: "340 ft²",
    description: "This studio, 1-bath floor plan is meticulously crafted to maximize functionality within its 340 sq ft. The open layout seamlessly combines the living, sleeping, and kitchen areas, creating a versatile and inviting space.",
    features: [
      "Open Living and Sleeping Area",
      "Efficient Kitchen Design",
      "Convenient Full Bathroom"
    ],
    floorPlanImage: "/lovable-uploads/27deba99-160c-44d5-9f53-b67e547a480d.png",
    stories: "One Story"
  },
  {
    name: "The Willow Plan",
    specs: "Studio, 1 Bath",
    image: "/lovable-uploads/74770311-8fd1-4af1-a815-b7354b0ad933.png",
    link: "/plans/willow",
    price: "$140,000",
    squareFeet: "360 ft²",
    description: "This studio, 1-bath floor plan is meticulously crafted to maximize functionality within its 360 sq ft. The open layout seamlessly combines the living, sleeping, and kitchen areas, creating a versatile and inviting space.",
    features: [
      "Open Living Area",
      "Efficient Kitchen",
      "Full Bathroom",
      "Smart Storage Solutions"
    ],
    floorPlanImage: "/lovable-uploads/74770311-8fd1-4af1-a815-b7354b0ad933.png",
    stories: "One Story"
  },
  {
    name: "The Redwood Plan",
    specs: "1 Bed, 1 Bath",
    image: "/lovable-uploads/d376ac77-74c6-4ae7-8d9e-718ff0a2c0d1.png",
    link: "/plans/redwood",
    price: "$180,000",
    squareFeet: "440 ft²",
    description: "This open-concept 1-bedroom plan features a thoughtfully designed layout with a cozy bedroom, full bathroom, and integrated kitchen/living area. With built-in storage throughout, this plan maximizes functionality in its compact 440 sq ft footprint.",
    features: [
      "Open-concept Kitchen/Living/Dining",
      "Private Bedroom",
      "Full Bathroom",
      "Built-in Storage Solutions"
    ],
    floorPlanImage: "/lovable-uploads/d376ac77-74c6-4ae7-8d9e-718ff0a2c0d1.png",
    stories: "One Story"
  },
  {
    name: "The Bluff Plan",
    specs: "1 Bed, 1 Bath",
    image: "/lovable-uploads/f447c865-ed66-4877-a352-f56f5c67ef94.png",
    link: "/plans/bluff",
    price: "$200,000",
    squareFeet: "490 ft²",
    description: "This spacious 490 sq ft 1-bedroom layout features a dedicated laundry area, open kitchen and living space, and a private bedroom. The smart design maximizes every inch of space while providing comfortable living quarters.",
    features: [
      "Private Bedroom",
      "Full Bathroom",
      "Dedicated Laundry Area",
      "Open Living Space",
      "Efficient Kitchen Layout"
    ],
    floorPlanImage: "/lovable-uploads/f447c865-ed66-4877-a352-f56f5c67ef94.png",
    stories: "One Story"
  },
  {
    name: "The Shore Plan",
    specs: "1 Bed, 1 Bath",
    image: "/lovable-uploads/21fee34c-566e-4fdd-88fb-a78d3d3b74b7.png",
    link: "/plans/shore",
    price: "$200,000",
    squareFeet: "490 ft²",
    description: "This streamlined 490 sq ft layout offers a functional design with an open flow between rooms. The dedicated bedroom, full bathroom, and spacious kitchen/living area provide all the essentials in a compact footprint.",
    features: [
      "Private Bedroom",
      "Full Bathroom",
      "Integrated Kitchen & Living Area",
      "Efficient Layout"
    ],
    floorPlanImage: "/lovable-uploads/21fee34c-566e-4fdd-88fb-a78d3d3b74b7.png",
    stories: "One Story"
  },
  {
    name: "The Rosewood Plan",
    specs: "1 Bed, 1 Bath",
    image: "/lovable-uploads/20445a80-7d0c-4d5b-b816-22dd735d5054.png",
    link: "/plans/rosewood",
    price: "$240,000",
    squareFeet: "580 ft²",
    description: "Our largest 1-bedroom layout at 580 sq ft features a dedicated laundry room, spacious bedroom, and open-concept kitchen and living area. This plan provides ample space and comfort for everyday living.",
    features: [
      "Spacious Bedroom",
      "Full Bathroom",
      "Dedicated Laundry Room",
      "Open-Concept Living Area",
      "Efficient Kitchen"
    ],
    floorPlanImage: "/lovable-uploads/20445a80-7d0c-4d5b-b816-22dd735d5054.png",
    stories: "One Story"
  },
  {
    name: "The Oak Plan",
    specs: "1 Bed, 1 Bath",
    image: "/lovable-uploads/b745e0c7-07ae-42eb-aa39-127c6ae0a12c.png",
    link: "/plans/oak",
    price: "$210,000",
    squareFeet: "520 ft²",
    description: "This thoughtfully designed 520 sq ft layout features a private master bedroom and a seamless living/kitchen area. The practical layout offers comfort and functionality in a compact footprint.",
    features: [
      "Private Master Bedroom",
      "Full Bathroom",
      "Open Kitchen & Living Area",
      "Practical Layout"
    ],
    floorPlanImage: "/lovable-uploads/b745e0c7-07ae-42eb-aa39-127c6ae0a12c.png",
    stories: "One Story"
  },
  {
    name: "The Fir Plan",
    specs: "1 Bed, 1 Bath",
    image: "/lovable-uploads/1e9679c4-31cb-4e6c-ba9d-e19ed0371537.png",
    link: "/plans/fir",
    price: "$180,000",
    squareFeet: "440 ft²",
    description: "This compact and efficient 440 sq ft layout offers a full bedroom, bathroom, and open kitchen/living area. The smart design maximizes functionality while providing all the essentials for comfortable living.",
    features: [
      "Private Bedroom",
      "Full Bathroom",
      "Open Kitchen & Living Space",
      "Efficient Layout"
    ],
    floorPlanImage: "/lovable-uploads/1e9679c4-31cb-4e6c-ba9d-e19ed0371537.png",
    stories: "One Story"
  },
  {
    name: "The Yosemite Plan",
    specs: "2 Bed, 2.5 Bath",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
    link: "/plans/yosemite",
    price: "$320,000",
  },
  {
    name: "The Glacier Plan",
    specs: "2 Bed, 2 Bath",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
    link: "/plans/glacier",
    price: "$280,000",
  },
  {
    name: "The Hickory Plan",
    specs: "2 Bed, 1 Bath",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=600&q=80",
    link: "/plans/hickory",
    price: "$220,000",
  },
  {
    name: "The Whistler Plan",
    specs: "Studio, 1 Bath",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=600&q=80",
    link: "/plans/whistler",
    price: "$210,000",
  },
  {
    name: "The Pine Plan",
    specs: "2 Bed, 1 Bath",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80",
    link: "/plans/pine",
    price: "$150,000",
  },
  {
    name: "The Palm Plan",
    specs: "2 Bed, 2 Bath",
    image: "https://images.unsplash.com/photo-1523837157348-ffbdaccfc7de?auto=format&fit=crop&w=600&q=80",
    link: "/plans/palm",
    price: "$200,000",
  },
  {
    name: "The Beech Plan",
    specs: "2 Bed, 2 Bath",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69a8bdbc7?auto=format&fit=crop&w=600&q=80",
    link: "/plans/beech",
    price: "$295,000",
  },
  {
    name: "The Bluff Plan",
    specs: "1 Bed, 1 Bath",
    image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&w=600&q=80",
    link: "/plans/bluff",
    price: "$210,000",
  },
  {
    name: "The Shore Plan",
    specs: "1 Bed, 1 Bath",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80",
    link: "/plans/shore",
    price: "$190,000",
  },
  {
    name: "The Rosewood Plan",
    specs: "1 Bed, 1 Bath",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80",
    link: "/plans/rosewood",
    price: "$200,000",
  },
  {
    name: "The Spruce Plan",
    specs: "Studio, 1 Bath",
    image: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=600&q=80",
    link: "/plans/spruce",
    price: "$140,000",
  },
  {
    name: "The Willow Plan",
    specs: "Studio, 1 Bath",
    image: "https://images.unsplash.com/photo-1560185008-a33f5c7b1fcb?auto=format&fit=crop&w=600&q=80",
    link: "/plans/willow",
    price: "$145,000",
  },
  {
    name: "The Oak Plan",
    specs: "1 Bed, 1 Bath",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5058?auto=format&fit=crop&w=600&q=80",
    link: "/plans/oak",
    price: "$210,000",
  },
  {
    name: "The Fir Plan",
    specs: "1 Bed, 1 Bath",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=600&q=80",
    link: "/plans/fir",
    price: "$180,000",
  },
];
