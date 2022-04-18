import React from 'react';

const Blogs = () => {
  return (
    <div className='w-[90%] lg:w-[65%] mx-auto mt-20 mb-36'>
      <div className='shadow-lg mt-5 p-5'>
        <h4 className='text-xl font-medium '>
          1. Difference between authorization and authentication.
        </h4>
        <p className='text-base font-normal mt-3 text-justify'>
          Authorization এবং authentication ২টি শব্দ প্রায় একই শোনা গেলেও দুটি
          ভিন্ন জিনিস। একটি ইউজার কে পারমিশন দেওয়া কোনো কিছু access করার জন্য
          অপরটি আইডেন্টি ভেরিফাই করে। Authentication এমন একটি প্রোসেস যা নির্ভর
          করে ইউজারের দেওয়া ইনফরেশনের উপর যা হতে পারে ই-মেইল বা পাসওয়ার্ড ,এবং
          এটির মাধ্যমে ইউজার তার আইডেন্টি ভেরিফাই করে। অনেক কিছুর মাধ্যমেই
          authentication করা সম্ভব ,যেমন email password,OTP ,security codes,
          Biometrics eye scan ইত্যাদি। Authorization এমন একটি প্রোসেস যা নির্ভর
          করে ইউজারকে পারমিশন দেওয়া হয় কোনো একটা নিদিষ্ট জিনিসকে access করার
          জন্য, যেমন Single-Factor Authentication,two-step verification.
        </p>
      </div>
      <div className='shadow-lg mt-5 p-5'>
        <h4 className='text-xl font-medium '>
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p className='text-base font-normal mt-3 text-justify'>
          Firebase Authentication খুব সহজেই ইউজারের লগইনের রেজিস্ট্রেশনের
          ব্যবস্থা করে দেয় যেটা আমরা নিজেদের করা অনেক জটিল তাই Firebase
          Authentication ব্যবহার করা অনেক উপকারী। Firebase Authentication ছাড়াও
          authentication এপ্লাই করা যায় , সে ক্ষেত্রে আমাদের সার্ভার সাইড
          অর্থ্যাৎ backend এর কাজ করতে হবে, backend এর মাধ্যমে authentication
          configure করে ডাটাবেজে ইউজার ইনফো রাখতে হবে । ইউজার যখন signup করবে তা
          ডাটাবেজে স্টোর হবে এবং signin করার সময় ডাটাবেজে থেকে ডাটা এনে অর্থ্যাৎ
          authentication করবে।
        </p>
      </div>
      <div className='shadow-lg mt-5 p-5'>
        <h4 className='text-xl font-medium '>
          3. What other services does firebase provide other than
          authentication?
        </h4>
        <p className='text-base font-normal mt-3 text-justify'>
          আমরা জানি firebase আমাদের authentication প্রোভাইড করে যার মাধ্যমে
          ইউজারকে verify করতে পারি, firebase শুধু authentication এর কাজই করে না
          এছাড়াও firebase অনেক কিছু প্রোভাইড করে। যেমন Cloud Messaging,Google
          Analytics,Cloud Storage,Hosting,Realtime Database। Cloud Messaging
          মূলত মেসেজ কিংবা নোটিফিকেশন পাঠানো যায় ইউজারকে। Hosting দিয়ে ওয়েবসাইট
          কে host করা যায় । Realtime Database এ ইউজারের ডাটা স্টোর করা হয় ।
          Google Analytics দিয়ে কোনো নিদিষ্ট জিনিসের analytics করা যায়।
        </p>
      </div>
    </div>
  );
}

export default Blogs