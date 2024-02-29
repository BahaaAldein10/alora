"use client";

import { features } from "@/constants";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "./Title";

interface MediaProps {
  loading?: boolean;
}

function Featured(props: MediaProps) {
  const { loading = false } = props;

  return (
    <section id="featured" className="w-full">
      <div className="container">
        {/* =======| TITLE |======= */}
        <Title mainTitle="Featured" subTitle="Products" />

        {/* =======| GRID |======= */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={`feature-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: index < 4 ? 0.5 : 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {loading ? (
                <Skeleton
                  animation="wave"
                  width="100%"
                  height="400px"
                  style={{ borderRadius: 16 }}
                />
              ) : (
                <div className="w-full h-[400px] rounded-2xl cursor-pointer overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    transition={{ ease: "easeInOut" }}
                    src={feature.image}
                    alt={feature.name}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
              )}

              <div>
                {loading ? (
                  <Skeleton animation="wave" width="80%" height={16} />
                ) : (
                  <h1 className="mt-4 text-1">{feature.name}</h1>
                )}

                {loading ? (
                  <Skeleton animation="wave" width="40%" height={16} />
                ) : (
                  <div className="flex gap-1 mt-2">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={`star-${index}`}
                        src="/elements/star.png"
                        alt="star"
                        width={16}
                        height={16}
                      />
                    ))}
                    <Image
                      src="/elements/half_star.png"
                      alt="half_star"
                      width={16}
                      height={16}
                    />
                  </div>
                )}

                {loading ? (
                  <Skeleton animation="wave" width="80%" height={16} />
                ) : (
                  <h2 className="mt-2 text-1.5">${feature.price}</h2>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
