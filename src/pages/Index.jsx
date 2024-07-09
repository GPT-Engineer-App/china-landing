import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { History, Users, TrendingUp, Landmark } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="relative h-[60vh] flex items-center justify-center text-white">
        <img
          src="/placeholder.svg"
          alt="Great Wall of China"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Discover China</h1>
          <p className="text-xl">A Journey Through the Middle Kingdom</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome to China</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            China, with its rich history spanning over 5000 years, is a land of diverse cultures, breathtaking landscapes, and rapid modernization. From ancient wonders to cutting-edge technology, China offers a unique blend of tradition and innovation that captivates visitors from around the world.
          </p>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <CardTitle>{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src="/placeholder.svg" alt={image.caption} className="w-full h-full object-cover" />
                      </CardContent>
                    </Card>
                    <p className="text-center mt-2">{image.caption}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p>Email: info@discoverchinaguide.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">Facebook</a>
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">Instagram</a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Discover China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const highlights = [
  {
    icon: <History className="h-8 w-8 text-primary" />,
    title: "History",
    description: "Ancient Civilization with over 5000 years of history."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Culture",
    description: "Diverse and vibrant culture with unique traditions."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Economy",
    description: "One of the world's largest and fastest-growing economies."
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Landmarks",
    description: "Home to iconic landmarks like the Great Wall and Forbidden City."
  }
];

const galleryImages = [
  { caption: "The Great Wall of China" },
  { caption: "Terracotta Army in Xi'an" },
  { caption: "Shanghai Skyline" },
  { caption: "Li River in Guilin" },
  { caption: "Forbidden City in Beijing" }
];

export default Index;