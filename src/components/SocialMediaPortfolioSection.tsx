import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Search, Home, PlusSquare, Film, User, ThumbsUp, Share2, Globe } from "lucide-react";
import portfolioBlossoms from "@/assets/portfolio-blossoms.jpg";
import portfolioJewellery from "@/assets/portfolio-bsp-jewellery.jpg";

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
};

const metroCover =
  "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&q=80&auto=format&fit=crop";

const clients: Client[] = [
  {
    name: "Blossoms Hospital",
    industry: "Healthcare",
    handle: "blossomshospital",
    fbName: "Blossoms Hospital",
    cover: portfolioBlossoms,
    accent: "from-rose-400 to-pink-500",
    bio: "Multi-Speciality Hospital · Compassionate Care\nNH-44, Hyderabad · 24/7 Emergency",
    posts: 248,
    followers: "42.6K",
    following: 184,
    likes: "38K",
    grid: [
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&q=70",
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=70",
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=400&q=70",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=70",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=70",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=70",
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=70",
      "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=400&q=70",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=70",
    ],
    fbPosts: [
      {
        caption:
          "World Heart Day Camp · Free ECG & BP screening this Saturday. Walk in between 9 AM – 1 PM.",
        likes: "2.1K",
        comments: "184",
        shares: "312",
      },
      {
        caption:
          "Meet Dr. Anita Reddy, our Sr. Cardiologist — 18+ years of experience in interventional cardiology.",
        likes: "1.4K",
        comments: "96",
        shares: "128",
      },
    ],
    results: [
      { value: "+312%", label: "Page Reach" },
      { value: "3.2×", label: "Inquiries" },
      { value: "42K", label: "Followers" },
    ],
  },
  {
    name: "BSP Golds & Diamonds",
    industry: "Jewellery",
    handle: "bsp_goldsdiamonds",
    fbName: "BSP Golds & Diamonds",
    cover: portfolioJewellery,
    accent: "from-amber-400 to-yellow-600",
    bio: "Heritage Jewellery House · Est. 1992\nBridal · Diamond · 22K Gold · Hyderabad",
    posts: 612,
    followers: "128K",
    following: 92,
    likes: "94K",
    grid: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=70",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=70",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=70",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=70",
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&q=70",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=70",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=70",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=70",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=70",
    ],
    fbPosts: [
      {
        caption:
          "Festive Collection 2026 is here — Polki, Kundan & Uncut Diamonds. Visit our showroom for an exclusive preview.",
        likes: "5.6K",
        comments: "412",
        shares: "984",
      },
      {
        caption:
          "Bridal Edit · Heirloom-worthy sets crafted by master artisans. Book a private consultation today.",
        likes: "3.9K",
        comments: "256",
        shares: "612",
      },
    ],
    results: [
      { value: "+480%", label: "Engagement" },
      { value: "2.0×", label: "Walk-ins" },
      { value: "128K", label: "Followers" },
    ],
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
  },
];

const InstagramMockup = ({ client }: { client: Client }) => (
  <div className="relative mx-auto w-full max-w-[320px]">
    <div className="bg-[#0d0d0d] rounded-[2.5rem] p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-off-white/10">
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
        {/* Grid */}
        <div className="mt-4 grid grid-cols-3 gap-[2px]">
          {client.grid.map((src, i) => (
            <div key={i} className="aspect-square bg-gray-100 overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
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
    <div className="mt-4 text-center">
      <span className="font-body text-[10px] uppercase tracking-[0.25em] text-primary font-700">
        Instagram
      </span>
    </div>
  </div>
);

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
        {/* Header */}
        <div className="mb-20 max-w-4xl">
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
            className="font-heading text-4xl md:text-6xl font-600 text-charcoal leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Pages That <span className="text-primary">Convert Followers</span> Into Customers
          </motion.h2>
          <motion.p
            className="font-body text-base md:text-lg text-charcoal/70 leading-relaxed mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            From profile design to daily posting — we run Instagram & Facebook pages that build real audiences and drive measurable business growth.
          </motion.p>
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
            >
              {/* Client label */}
              <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="inline-flex items-center font-body text-[11px] font-700 uppercase tracking-[0.2em] text-charcoal bg-primary px-4 py-1.5 rounded-full mb-3">
                    {client.industry}
                  </span>
                  <h3 className="font-heading text-3xl md:text-5xl font-600 text-charcoal leading-tight">
                    {client.name}
                  </h3>
                </div>
                <div className="flex gap-8">
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

              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                >
                  <InstagramMockup client={client} />
                </motion.div>
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