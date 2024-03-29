import React from "react";
import Image from "next/image"; 

interface BlogPost {
  img: string;
  title: string;
  url: string;
}

const Experience: React.FC = () => {
  const posts: BlogPost[] = [
    // Your blog posts data here
  ];

  return (
    <div className="bg-primary text-secondary px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit border-secondary pb-2">
            Experiences
          </h2>
        </div>
      </div>
      
        <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
          <p>COMING SOON, CHECK OUT MY <a href="/#contact" className="underline">SOCIAL</a> OR <a href="/#projects" className="underline">PROJECTS</a> IN THE MEANTIME!</p>
          {posts.map((item, index) => (
            <div key={index}>
              <Image
                src={item.img}
                alt={item.title}
                width={500} // Set the width as per your design
                height={300} // Set the height as per your design
              />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Experience;
