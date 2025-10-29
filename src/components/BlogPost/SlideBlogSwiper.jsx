import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BlogPost.css";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import blog1 from "./../../assets/pic/blog-1.jpg";
import blog2 from "./../../assets/pic/blog-2.jpg";
import blog3 from "./../../assets/pic/blog-3.jpg";
import blog4 from "./../../assets/pic/blog-4.jpg";
import blog5 from "./../../assets/pic/blog-5.jpg";
import blog6 from "./../../assets/pic/blog-6.jpg";
import { Link } from "react-router";

export const blogPosts = [
  {
    id: "1",
    img: blog1,
    date: "February 9, 2024",
    author: "Editor",
    title: "How to Write a Blog Post Your Readers Will Love in 5 Steps",
    description:
      "What You Need to Know about the Facebook Product Design Interview and What to do about it. Pug twee fam pour-over seitan single-origin coffee crucifix blue bottle aesthetic flexitarian. Four loko kale chips authentic, hell of green juice bespoke deep v next level migas. Woke bushwick prism live-edge austin tote bag.Whatever wolf leggings yuccie +1 90’s, austin ennui listicle hashtag church-key master cleanse hexagon mlkshk kitsch. Dreamcatcher ugh jianbing palo santo blog hashtag brunch. Hoodie taxidermy prism venmo blue bottle next level neutra vaporware typewriter af plaid retro freegan.",
  },
  {
    id: "2",
    img: blog2,
    date: "February 7, 2024",
    author: "Editor",
    title: "9 Content Marketing Trends and Ideas to Increase Traffic",
    description:
      "How cool tech gadgets can help you predict the future. The 10 best passport application twitter feeds to follow. 9 uses for business software. The unconventional guide to wholesale accessories. How to be unpopular in the science article world. Unbelievable dollar general application success stories. ",
  },
  {
    id: "3",
    img: blog3,
    date: "February 5, 2024",
    author: "Editor",
    title: "The Ultimate Guide to Marketing Strategies to Improve Sales",
    description:
      "How storage devices can help you predict the future. Why mom was right about wholesale accessories. What the world would be like if home tech gadgets didn't exist many uses for devices. How devices can help you predict the future. Ways landscape architectures are completely overrated Culpa perspiciatis Quidem aliquid minima optio labore placeat dolores. Sint occaecati sunt autem aut. Eveniet sit quos eum totam labore ipsum eum Voluptates quia porro Rerum voluptas qui reprehenderit in Culpa eius sapiente eligendi et. Dicta aut rerum iusto doloribus consequuntur. Enim innihil molestias estid numquam. perferendis sit reiciendis. Dolore delectus numquam laboriosam quisquam harum. Omnis non quia. Id blanditiis possimus quibusdam est nihil temporibus. dignissimos pariatur laboriosam consequatur adipisci dolor. Magni repudiandae sapiente qui. Et et enim non. aut nihil dolores aut est. Eveniet officiis quaerat ut a. Expedita asperiores in voluptas sed Deleniti dolore id hic est Vero deleniti ut tenetur vel.",
  },
  {
    id: "4",
    img: blog4,
    date: "February 3, 2024",
    author: "Editor",
    title: "50 Best Sales Questions to Determine Your Customer's Needs",
    description:
      "Why do people think business software is a good idea? Why technology tips will make you question everything. Why storage devices are afraid of the truth. What everyone is saying about best stores. The complete beginner's guide to wholesale accessories. Why your storage device never works out the way you plan. An expert interview about science museums.",
  },
  {
    id: "5",
    img: blog5,
    date: "February 1, 2024",
    author: "Editor",
    title: "6 Simple Ways To Boost Your Ecommerce Conversion Rate",
    description:
      "Use storytelling to create an emotional connection with potential customers by showing how your product or service can fit into their lives and help them achieve their goals. Finally, it’s important to always keep your target audience in mind and tailor your message and language to resonate with them",
  },
  {
    id: "6",
    img: blog6,
    date: "January 29, 2024",
    author: "Editor",
    title: "9 Customer Experience Trends That'll Define the Next Year",
    description:
      "Franchises by the numbers. The podcasts about business reviews how stockcharts can help you predict the future. The complete beginner's guide to stock markets. How twitter can teach you about investors.Sunt voluptas suscipit dolorum pariatur laud antium. Id minima quod asper natur animi similique doloribus repreh enderit. Conse quatur aliquid non deleniti placeat quo voluptas animi. Aperiam omnis aperiam quam fugiat eum nostrum ipsum ut. Ipsa sint aut eius eaque. Quia incidunt dicta autem quibusdam placeat. Consequuntur enim magnam exercit ationem rerum ratione. Ut molestiae rerum est aut quis ipsum. Saepe pariatur eveniet minima omnis.",
  },
];

export const SlideBlogSwiper = () => {
  //  تابع برای محدود کردن طول متن
  const handelLimitText = (text, maxlength) => {
    return text.length > maxlength ? text.slice(0, maxlength) + "..." : text;
  };
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      grabCursor={true}
      // pagination={{ clickable: true }}
      navigation={true}
      keyboard={{ enabled: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      className="blog-swiper"
    >
      {blogPosts.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="blog-item">
            <div className="blog-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="blog-info">
              <span>{item.date}</span> | <span>by {item.author}</span>
            </div>
            <h2>{item.title}</h2>
            <p>{handelLimitText(item.description, 80)}</p>
            <Link to={`/blog/${item.id}`} className="blog-link">
              Read More...
            </Link>
            {/* <a href={item.link} className="blog-link">
              Read More
            </a> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
