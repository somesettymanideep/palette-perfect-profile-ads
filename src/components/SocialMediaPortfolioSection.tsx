import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Search, Home, PlusSquare, Film, User, ThumbsUp, Share2, Globe } from "lucide-react";
import portfolioBlossoms from "@/assets/portfolio-blossoms.jpg";
import portfolioJewellery from "@/assets/portfolio-bsp-jewellery.jpg";
import vijayaMockup from "@/assets/vijaya-mockup.png";
import sanghviMockup from "@/assets/sanghvi-mockup.png";
import metroCarsMockup from "@/assets/metro-cars-mockup.png";
import bombayJewellersMockup from "@/assets/bombay-jewellers-mockup.png";
import sairajendraMockup from "@/assets/sairajendra-mockup.png";
import socialMediaHeroMockup from "@/assets/social-media-hero-mockup.png";

type Client = {
  name: string;
  industry: string;
  handle: string;
  fbName: string;
  cover: string;
  accent: string;
  bio: string;
  posts: number;
  followers: string;
  following: number;
  likes: string;
  grid: string[];
  fbPosts: { caption: string; likes: string; comments: string; shares: string }[];
  results: { value: string; label: string }[];
  mockupImage?: string;
};

const metroCover =
  "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&q=80&auto=format&fit=crop";

const clients: Client[] = [
  {
    name: "Bombay Jewellers",
    industry: "Jewellery",
    handle: "bombayjewellersvja",
    fbName: "Bombay Jewellers",
    cover: portfolioJewellery,
    accent: "from-amber-400 to-yellow-600",
    bio: "Bombay Jewellers · Since 1935\nSymbol of Trust · Crafters of Superior Designs\nSpecialised in Gold, Diamond & Platinum",
    posts: 522,
    followers: "4,232",
    following: 161,
    likes: "0",
    grid: [],
    fbPosts: [],
    results: [
      { value: "+286%", label: "Page Reach" },
      { value: "3.4×", label: "Inquiries" },
      { value: "4.2K", label: "Followers" },
    ],
    mockupImage: bombayJewellersMockup,
  },
  {
    name: "Sai Rajendra Gold Palace",
    industry: "Jewellery",
    handle: "sairajendragoldpalace",
    fbName: "Sai Rajendra Gold Palace",
    cover: portfolioJewellery,
    accent: "from-amber-400 to-yellow-600",
    bio: "Shopping & retail · Est. 1905\nA legacy built on your trust in our artistry of Gold and Diamond Jewellery.\nMG Road, nr. Taj Vivanta",
    posts: 1687,
    followers: "5,256",
    following: 6,
    likes: "0",
    grid: [],
    fbPosts: [],
    results: [
      { value: "+264%", label: "Page Reach" },
      { value: "3.1×", label: "Inquiries" },
      { value: "5.2K", label: "Followers" },
    ],
    mockupImage: sairajendraMockup,
  },
  {
    name: "Metro Cars",
    industry: "Automotive",
    handle: "metrocars.official",
    fbName: "Metro Cars",
    cover: metroCover,
    accent: "from-sky-500 to-blue-700",
    bio: "Premium Pre-Owned Cars · Certified Quality\n200+ Cars in Stock · Easy Finance · Hyderabad",
    posts: 384,
    followers: "76.4K",
    following: 148,
    likes: "61K",
    grid: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=70",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&q=70",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=70",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=70",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=70",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=70",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&q=70",
      "https://images.unsplash.com/photo-1542228262-3d663b306a53?w=400&q=70",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=70",
    ],
    fbPosts: [
      {
        caption:
          "Just In · 2022 BMW 3 Series · 18K km · Single Owner · Service Records Available. DM for test drive.",
        likes: "3.2K",
        comments: "228",
        shares: "186",
      },
      {
        caption:
          "EMI starting ₹14,999/mo · 0 down payment options · Get your dream car home this weekend.",
        likes: "2.6K",
        comments: "312",
        shares: "242",
      },
    ],
    results: [
      { value: "+265%", label: "Leads / Mo" },
      { value: "4.1×", label: "Test Drives" },
      { value: "76K", label: "Followers" },
    ],
    mockupImage: metroCarsMockup,
  },
  {
    name: "Vijaya Super Specialty Hospital",
    industry: "Healthcare",
    handle: "vijayasuperspecialtyhospital",
    fbName: "Vijaya Super Specialty Hospital",
    cover: portfolioBlossoms,
    accent: "from-primary to-[hsl(var(--primary)/0.7)]",
    bio: "Excellence in Healthcare for Everyone\nExpert Doctors · Advanced Treatments · Specializing in Multi-Speciality Care",
    posts: 211,
    followers: "492",
    following: 0,
    likes: "0",
    grid: [],
    fbPosts: [],
    results: [
      { value: "+248%", label: "Page Reach" },
      { value: "2.8×", label: "Inquiries" },
      { value: "492", label: "Followers" },
    ],
    mockupImage: vijayaMockup,
  },
  {
    name: "Sanghvi Car Shoppee",
    industry: "Automotive",
    handle: "sanghvi_car_shoppee",
    fbName: "Sanghvi Car Shoppee",
    cover: portfolioBlossoms,
    accent: "from-primary to-[hsl(var(--primary)/0.7)]",
    bio: "Vadodara's Trusted Pre-Owned Car Dealership\nPremium Brands · Certified Quality · Easy Finance",
    posts: 1214,
    followers: "14.4K",
    following: 516,
    likes: "0",
    grid: [],
    fbPosts: [],
    results: [
      { value: "+312%", label: "Page Reach" },
      { value: "3.6×", label: "Inquiries" },
      { value: "14.4K", label: "Followers" },
    ],
    mockupImage: sanghviMockup,
  },
];

const InstagramMockup = ({ client }: { client: Client }) => {
  if (client.mockupImage) {
    return (
      <div className="relative mx-auto w-full max-w-[420px]">
        <img
          src={client.mockupImage}
          alt={`${client.name} Instagram mockup`}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    );
  }
  return (
  <div className="relative mx-auto w-full max-w-[420px] pb-24">
    {/* Podium (two stacked discs: orange middle, off-white base) */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[110%] pointer-events-none">
      {/* Outer base disc */}
      <div className="relative mx-auto w-[100%] aspect-[5/1]">
        <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-off-white to-[#e8e2d6] shadow-[0_30px_50px_-20px_rgba(0,0,0,0.25)]" />
        {/* Orange disc on top */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[35%] w-[78%] aspect-[5/1.1]">
          <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-primary to-[hsl(var(--primary)/0.85)] shadow-[0_18px_30px_-10px_rgba(0,0,0,0.35)]" />
          {/* Top off-white disc (where phone stands) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[55%] w-[90%] aspect-[6/1]">
            <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-white to-off-white shadow-[inset_0_2px_6px_rgba(0,0,0,0.08)]" />
          </div>
        </div>
      </div>
    </div>

    {/* Phone (tilted) */}
    <div
      className="relative mx-auto w-full max-w-[300px] z-10"
      style={{ transform: "perspective(1400px) rotateY(-14deg) rotateX(4deg) rotateZ(-3deg)", transformStyle: "preserve-3d" }}
    >
      <div className="bg-[#0d0d0d] rounded-[2.5rem] p-2 shadow-[40px_50px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-off-white/10">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0d0d0d] rounded-b-2xl z-20" />
        <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[9/19]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-600 text-black">
            <span>9:41</span>
            <span className="flex gap-1 items-center">
              <span className="w-3 h-2 bg-black rounded-sm" />
              <span className="w-3 h-2 border border-black rounded-sm" />
            </span>
          </div>
          {/* IG header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
            <span className="font-700 text-sm text-black">{client.handle}</span>
            <MoreHorizontal className="w-4 h-4 text-black" />
          </div>
          {/* Profile row */}
          <div className="px-4 pt-4">
            <div className="flex items-center gap-5">
              <div className={`w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr ${client.accent}`}>
                <div className="w-full h-full rounded-full p-[2px] bg-white">
                  <img src={client.cover} alt={client.name} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              <div className="flex-1 grid grid-cols-3 text-center">
                <div>
                  <div className="text-[13px] font-700 text-black">{client.posts}</div>
                  <div className="text-[10px] text-gray-500">posts</div>
                </div>
                <div>
                  <div className="text-[13px] font-700 text-black">{client.followers}</div>
                  <div className="text-[10px] text-gray-500">followers</div>
                </div>
                <div>
                  <div className="text-[13px] font-700 text-black">{client.following}</div>
                  <div className="text-[10px] text-gray-500">following</div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-[12px] font-700 text-black">{client.name}</div>
              <div className="text-[10px] text-gray-700 whitespace-pre-line leading-snug mt-0.5">
                {client.bio}
              </div>
            </div>
            <div className="flex gap-1.5 mt-3">
              <button className="flex-1 bg-[#0095f6] text-white text-[11px] font-600 py-1 rounded">
                Follow
              </button>
              <button className="flex-1 bg-gray-100 text-black text-[11px] font-600 py-1 rounded">
                Message
              </button>
              <button className="bg-gray-100 text-black text-[11px] font-600 py-1 px-2 rounded">
                ▼
              </button>
            </div>
          </div>
          {/* Featured creative (large) */}
          <div className="mt-4 mx-0">
            <div className="relative aspect-square overflow-hidden">
              <img src={client.grid[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
            <Home className="w-4 h-4 text-black" />
            <Search className="w-4 h-4 text-black" />
            <PlusSquare className="w-4 h-4 text-black" />
            <Film className="w-4 h-4 text-black" />
            <User className="w-4 h-4 text-black" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const FacebookMockup = ({ client }: { client: Client }) => (
  <div className="relative mx-auto w-full max-w-[420px] rounded-2xl overflow-hidden bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-off-white/10">
    {/* FB top bar */}
    <div className="flex items-center justify-between bg-white px-3 py-2 border-b border-gray-200">
      <span className="font-heading text-[#1877f2] font-700 text-xl">facebook</span>
      <div className="flex gap-2">
        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
          <Search className="w-3.5 h-3.5 text-gray-700" />
        </div>
        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
          <MessageCircle className="w-3.5 h-3.5 text-gray-700" />
        </div>
      </div>
    </div>
    {/* Cover */}
    <div className="relative h-32 md:h-40 bg-gray-200 overflow-hidden">
      <img src={client.cover} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
    {/* Profile header */}
    <div className="relative px-4 pb-3">
      <div className="flex items-end gap-3 -mt-10">
        <div className={`w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr ${client.accent} shrink-0`}>
          <div className="w-full h-full rounded-full p-[2px] bg-white">
            <img src={client.cover} alt="" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
        <div className="flex-1 pb-1">
          <div className="text-[15px] font-700 text-black leading-tight">{client.fbName}</div>
          <div className="text-[11px] text-gray-600">
            {client.followers} followers · {client.likes} likes
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="flex-1 bg-[#1877f2] text-white text-[11px] font-600 py-1.5 rounded-md">
          Like
        </button>
        <button className="flex-1 bg-[#1877f2] text-white text-[11px] font-600 py-1.5 rounded-md">
          Follow
        </button>
        <button className="flex-1 bg-gray-100 text-black text-[11px] font-600 py-1.5 rounded-md">
          Message
        </button>
      </div>
    </div>
    {/* Posts */}
    <div className="bg-gray-50 px-3 py-3 space-y-3">
      {client.fbPosts.map((post, i) => (
        <div key={i} className="bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <img src={client.cover} alt="" className="w-8 h-8 rounded-full object-cover" />
            <div>
              <div className="text-[12px] font-700 text-black leading-tight">{client.fbName}</div>
              <div className="text-[10px] text-gray-500 flex items-center gap-1">
                2 hrs · <Globe className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
          <p className="text-[11px] text-gray-800 leading-relaxed mb-2">{post.caption}</p>
          <div className="h-32 bg-gray-100 rounded overflow-hidden mb-2">
            <img
              src={client.grid[i % client.grid.length]}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-600 pb-2 border-b border-gray-100">
            <span className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded-full bg-[#1877f2] flex items-center justify-center">
                <ThumbsUp className="w-2 h-2 text-white" />
              </span>
              {post.likes}
            </span>
            <span>
              {post.comments} comments · {post.shares} shares
            </span>
          </div>
          <div className="flex justify-around pt-2 text-gray-600">
            <span className="flex items-center gap-1 text-[10px] font-600">
              <ThumbsUp className="w-3 h-3" /> Like
            </span>
            <span className="flex items-center gap-1 text-[10px] font-600">
              <MessageCircle className="w-3 h-3" /> Comment
            </span>
            <span className="flex items-center gap-1 text-[10px] font-600">
              <Share2 className="w-3 h-3" /> Share
            </span>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-1 text-center pb-3 pt-2 bg-white">
      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-primary font-700">
        Facebook
      </span>
    </div>
  </div>
);

const heroFloatingCards = [
  {
    src: portfolioBlossoms,
    label: "Blossoms Hospital",
    className:
      "absolute left-[-2%] top-[18%] w-[180px] md:w-[220px] -rotate-[8deg]",
    delay: 0.3,
  },
  {
    src: portfolioJewellery,
    label: "BSP Jewellery",
    className:
      "absolute left-[6%] bottom-[8%] w-[170px] md:w-[210px] rotate-[6deg]",
    delay: 0.45,
  },
  {
    src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80",
    label: "Metro Cars",
    className:
      "absolute right-[8%] top-[10%] w-[170px] md:w-[200px] rotate-[5deg]",
    delay: 0.6,
  },
  {
    src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
    label: "Bridal Edit",
    className:
      "absolute right-[-2%] bottom-[14%] w-[160px] md:w-[200px] -rotate-[7deg]",
    delay: 0.75,
  },
];

const HeroPhoneMockup = () => (
  <div className="relative mx-auto w-[260px] md:w-[300px]">
    <div className="bg-[#0d0d0d] rounded-[2.5rem] p-2 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-black/10">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0d0d0d] rounded-b-2xl z-20" />
      <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[9/19]">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <span className="font-700 text-[12px] text-black">bisaurabrand</span>
          <MoreHorizontal className="w-4 h-4 text-black" />
        </div>
        <div className="px-4 pt-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-primary to-amber-500">
              <div className="w-full h-full rounded-full bg-white p-[2px]">
                <img src={portfolioJewellery} alt="" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-3 text-center text-black">
              <div><div className="text-[12px] font-700">248</div><div className="text-[9px] text-gray-500">posts</div></div>
              <div><div className="text-[12px] font-700">42K</div><div className="text-[9px] text-gray-500">followers</div></div>
              <div><div className="text-[12px] font-700">184</div><div className="text-[9px] text-gray-500">following</div></div>
            </div>
          </div>
          <div className="mt-2 text-[11px] font-700 text-black">Your Brand</div>
          <div className="text-[9px] text-gray-600 leading-snug">Premium design · Daily posts · Real growth</div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-[2px] px-0">
          {[portfolioBlossoms, portfolioJewellery, "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&q=70", "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&q=70", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&q=70", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&q=70"].map((s, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-gray-100">
              <img src={s} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SocialMediaPortfolioSection = () => {
  return (
    <section id="social-portfolio" className="py-32 bg-off-white relative overflow-hidden">
      {/* Bg accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--charcoal)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--charcoal)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Hero composition */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: phone + floating creative cards */}
          <div className="relative order-2 lg:order-1 flex items-center justify-center">
            <motion.img
              src={socialMediaHeroMockup}
              alt="Social media marketing mockup with phone and platform icons"
              className="w-full max-w-[520px] h-auto object-contain"
              loading="lazy"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Right: headline */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span aria-hidden className="h-px w-10 bg-primary" />
              <p className="font-body text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-700">
                Social Media Marketing
              </p>
            </motion.div>
            <motion.h2
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-600 text-charcoal leading-[1.05]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Get <span className="text-primary">Quality</span> Social Media{" "}
              <span className="text-primary">Designs</span> for Your <span className="italic">Brand</span>
            </motion.h2>
            <motion.p
              className="font-body text-base md:text-lg text-charcoal/70 leading-relaxed mt-6 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              From profile design to daily posting — we craft scroll-stopping creatives that turn followers into loyal customers.
            </motion.p>
          </div>
        </div>

        {/* Per-client side-by-side mockups */}
        <div className="space-y-32">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Phone mockup (left on desktop, alternates) */}
              <motion.div
                className={`flex justify-center ${i % 2 === 1 ? "lg:order-2" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <InstagramMockup client={client} />
              </motion.div>

              {/* Right: brand name + industry badge + stats */}
              <div className={`${i % 2 === 1 ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
                <span className="inline-flex items-center font-body text-[11px] font-700 uppercase tracking-[0.2em] text-charcoal bg-primary px-4 py-1.5 rounded-full mb-5">
                  {client.industry}
                </span>
                <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-600 text-charcoal leading-[1.05] mb-4">
                  {client.name}
                </h3>
                <p className="font-body text-base text-charcoal/70 leading-relaxed whitespace-pre-line mb-8 max-w-md">
                  {client.bio}
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-charcoal/15 max-w-md">
                  {client.results.map((r) => (
                    <div key={r.label}>
                      <div className="font-heading text-2xl md:text-3xl font-600 text-primary leading-none">
                        {r.value}
                      </div>
                      <div className="font-body text-[10px] uppercase tracking-[0.2em] text-charcoal/60 mt-2">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom summary */}
        <motion.div
          className="mt-28 pt-12 border-t border-charcoal/15 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { value: "250K+", label: "Followers Grown" },
            { value: "1,800+", label: "Posts Published" },
            { value: "12M+", label: "Monthly Impressions" },
            { value: "Daily", label: "Content Calendar" },
          ].map((m) => (
            <div key={m.label}>
              <div className="font-heading text-3xl md:text-4xl font-600 text-primary leading-none">
                {m.value}
              </div>
              <div className="font-body text-[11px] md:text-xs uppercase tracking-[0.2em] text-charcoal/60 mt-3">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaPortfolioSection;