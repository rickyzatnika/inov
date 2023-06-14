import React, { useState } from "react";
import dynamic from 'next/dynamic';
import { Footer, Intro } from "../../components";
import BackSound from "../../components/Backsound";
import axios from "axios";


const Header = dynamic(() => import('../../components/section/Header'));
const Gift = dynamic(() => import('../../components/section/Gift'));
const Invitation = dynamic(() => import('../../components/section/Invitation'));
const Navbar = dynamic(() => import('../../components/Navbar/NavMobile'));
const Event = dynamic(() => import('../../components/section/Event'));
const Wish = dynamic(() => import('../../components/section/Wish'));
const Prokes = dynamic(() => import('../../components/ShowProkes'));
const Profile = dynamic(() => import('../../components/section/Profile'));

const GuestInvitation = ({ guest, posts }) => {

  const [isPlay, setIsPlay] = useState(true);

  return (
    <>
      <BackSound isPlay={isPlay} setIsPlay={setIsPlay} />
      <Header />
      <Intro />
      <Profile />
      <Invitation guest={guest} />
      <Event guest={guest} />
      <Prokes />
      <Gift />
      <Wish guest={guest} posts={posts} />
      <Footer />
      <Navbar />
    </>
  );
};

export default GuestInvitation;

// export const getStaticPaths = async () => {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation`);
//   const invitationDataList = res.data || [];
//   const paths = invitationDataList.length
//     ? invitationDataList.map((guests) => {
//       return {
//         params: {
//           uuid: guests.unique_Code,
//         },
//       };
//     })
//     : [];
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
//   );
//   const guest = res.data || {};
//   return {
//     props: {
//       guest,
//     },
//     revalidate: 1
//   };
// };

export const getServerSideProps = async ({ params, query }) => {

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
  );
  const guest = res.data || {};

  const res2 = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/comment/${params.uuid}?userId=${query.userId}`,
    {
      responseType: "text",
    })
  const posts = JSON.parse(res2.data) || [];

  return {
    props: {
      guest,
      posts,
    },
  };
};

