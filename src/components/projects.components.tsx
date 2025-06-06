import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import { ProjectCardProps } from "../interfaces/project.interface";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const projectList: ProjectCardProps[] = [
  {
    title: "Appy Educators",
    description: "An online learning platform for educators and students",
    links: [{ label: "Live", href: "https://www.appyeducators.com" }],
    images: [
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1747327942/Screenshot_1_cgobqh.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1747327940/Screenshot_2_bqmovn.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1747327941/Screenshot_4_sokf7w.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1747327941/Screenshot_3_ojcivb.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1747327941/Screenshot_6_nqkvx0.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1747327942/Screenshot_8_s24eag.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1747327942/Screenshot_7_q527lk.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1747327942/Screenshot_9_m6xc7o.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1747327942/Screenshot_10_c0sako.png",
    ],
  },
  {
    title: "PYYR Brand",
    description: "A fintech voucher solutions for brands and merchants",
    links: [{ label: "Live", href: "https://rewards.pyyr.io/" }],
    images: [
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477078/qaomznacsmhtca1uacvl.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477078/ouxgcgnsagg3pemlscyk.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477078/vy6eh2afvx4auj099s9k.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477078/pyqpk3bam26j4hsom7cc.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477078/yo9vbdmtmyaei9remogx.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477077/j3ulka953zvxnbu3buin.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477078/lalx8ebqllnxktnzhwij.png",
    ],
  },
  {
    title: "Thrive",
    description:
      "A one-stop digital support center for growing businesses in Nigeria",
    links: [{ label: "Live", href: "https://thrivebizng.com/" }],
    images: [
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477868/Screenshot_6_vnmzes.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477868/Screenshot_7_et4qax.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477869/Screenshot_14_qascuw.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477869/Screenshot_13_om3xgx.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477868/Screenshot_9_xscfp0.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477868/Screenshot_10_zd4l69.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477867/Screenshot_8_kemdau.png",
      "https://res.cloudinary.com/dmwrbfxbp/image/upload/v1726477868/Screenshot_12_vyjbkb.png",
    ],
  },
  {
    title: "PYYR Website",
    description: "A fintech website that shows their landing page",
    links: [{ label: "Live", href: "http://www.pyyr.io/" }],
    images: [
      "https://res.cloudinary.com/dlnjwxp5e/image/upload/v1719846575/Screenshot_403_erz3gr.png",
      "https://res.cloudinary.com/dlnjwxp5e/image/upload/v1719846576/Screenshot_406_k19wzk.png",
      "https://res.cloudinary.com/dlnjwxp5e/image/upload/v1719846575/Screenshot_405_pqsdle.png",
      "https://res.cloudinary.com/dlnjwxp5e/image/upload/v1719846575/Screenshot_403_erz3gr.png",
      "https://res.cloudinary.com/dlnjwxp5e/image/upload/v1719846574/Screenshot_407_o6whrf.png",
    ],
  },
  {
    title: "PYYR Admin portal",
    description:
      "A fintech admin portal that manages all users and transations on the platform to fooster informed decision making, with the use of graphs, charts and among others.",
    links: [{ label: "Live", href: "https://admin.pyyr.io/" }],
    images: [
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692208019/test/pyyr1_xhn0gu.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207957/test/pyyr2_slhixg.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207960/test/pyyr3_jxkao0.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207984/test/pyyr4_anmdsj.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207963/test/pyyr5_uwgnkq.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207979/test/pyyr6_odz1u9.png",
    ],
  },
  {
    title: "Ilerioluwa Ecommerce",
    description:
      "Ecommerce website for the purchase of building materials with functionalities like add to cart, checkout, and online payment integration.",
    links: [
      { label: "Live", href: "https://ilerioluwa.vercel.app/" },
      {
        label: "Code",
        href: "https://github.com/Abu-Abdillah1/ileri-frontend",
      },
    ],
    images: [
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692208029/test/ile1_fthnne.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207950/test/ile2_jthuy4.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207946/test/ile3_zjxtue.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207951/test/ile4_yyufbd.png",
    ],
  },
  {
    title: "Watch Ecommerce",
    description:
      "This is a static website developed with SCSS and very responsive.",
    links: [
      { label: "Live", href: "https://abu-abdillah1.github.io/Watch/" },
      { label: "Code", href: "https://github.com/Abu-Abdillah1/Watch" },
    ],
    images: [
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207954/test/w1_r3azrb.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207941/test/w2_mzzlqx.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207938/test/w3_ylhpxb.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207939/test/w5_pyqmvv.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692207933/test/w4_pyqo2n.png",
    ],
  },
  {
    title: "SuperX",
    description:
      "Currency exchange peer to peer api that can be easily integrated to existing platforms.",
    links: [
      {
        label: "Docs",
        href: "https://documenter.getpostman.com/view/15084009/UVyyrsGW",
      },
      {
        label: "Code",
        href: "https://github.com/Abu-Abdillah1/superX",
      },
    ],
    images: [
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692208019/test/s1_n7z9cq.png",
      "https://res.cloudinary.com/deuzj9d9e/image/upload/v1692208019/test/s1_n7z9cq.png",
    ],
  },
];

export const ProjectCarousel = ({ images }: { images: string[] }) => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [isLessThan500] = useMediaQuery("(max-width: 500px)");
  const [isLessThan450] = useMediaQuery("(max-width: 450px)");

  return (
    <Box
      position={"relative"}
      overflow={"hidden"}
      maxW={isLessThan450 ? "250px" : isLessThan500 ? "310px" : "350px"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        bg={"#18F24F"}
        borderRadius="full"
        position="absolute"
        left={"3%"}
        top={"45%"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        bg={"#18F24F"}
        borderRadius="full"
        position="absolute"
        right={"3%"}
        top={"45%"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((url, index) => (
          <Image
            src={url}
            key={index}
            borderRadius={"lg"}
            fallbackSrc="https://via.placeholder.com/300"
          />
        ))}
      </Slider>
    </Box>
  );
};

const ProjectCard = ({
  title,
  description,
  images,
  links,
}: ProjectCardProps) => {
  return (
    <>
      <Card
        maxW="sm"
        bg={useColorModeValue("#1E1E1E", "gray.50")}
        color={useColorModeValue("white", "black")}
        minH={["300px", "350px"]}
      >
        <CardBody>
          <Flex justifyContent={"center"}>
            <ProjectCarousel images={images} />
          </Flex>

          <Stack mt="6" spacing="3">
            <Heading size="md" color={"#18F24F"}>
              {title}
            </Heading>
            <Text>{description}</Text>
          </Stack>
        </CardBody>

        <CardFooter justifyContent={"space-between"}>
          {links.map((l) => (
            <Link
              textDecoration={"underline"}
              _hover={{ color: "#18F24F" }}
              href={l.href}
              target="_blank"
              key={l.label}
            >
              {l.label}
            </Link>
          ))}
        </CardFooter>
      </Card>
    </>
  );
};

export const Projects = () => {
  const [isLessThan1100] = useMediaQuery("(max-width: 1100px)");
  const [isLessThan750] = useMediaQuery("(max-width: 750px)");
  return (
    <>
      <Flex gap={isLessThan1100 ? 5 : 16}>
        <Box bg={"#18F24F"} w={"10px"} />
        <Stack gap={16}>
          <Flex
            flexDir={"column"}
            justifyContent={"space-between"}
            color={useColorModeValue("white", "black")}
            gap={8}
          >
            <Stack direction={"row"} gap={5}>
              <Box bg={"#18F24F"} w={isLessThan750 ? "13px" : "15px"} />
              <Heading fontSize={isLessThan1100 ? "lg" : "3xl"}>
                Projects
              </Heading>
            </Stack>
            <Flex gap={5} flexWrap={"wrap"}>
              {projectList.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
};
