import React, { useState } from "react";
import { Voice } from "../types";
import VoicesModal from "./VoicesModal";

const voices: Voice[] = [
  {
    id: "1",
    name: "Doris Muzi",
    role: "Member since 2021",
    image: "/images/Doris2.jpg",
    quote: "I found a family here when I thought I was all alone.",
    story: `Doris Muzi has been a widow for 11 years but she still cannot come to terms with the death of her husband. Before her husband passed away in 2011, she had lost her child in 2010. She was left with two children and three other children from her husband’s previous marriage. Doris says that she has had challenges and is facing a lot of hardships after the death of her husband. Her in laws are not welcoming to her and never help her in any way. She depends on well-wishers for food and her children’s education. Doris is very thankful for the RSA project and wishes to be helped to start a business that can help sustain her and her kids. From the counselling session that Doris received, she was left with so much joy after realizing that she was not alone. Doris is hopeful that one day she will regain the joy that she had before.

Ever since Doris was recruited to the programme, she attends all her counseling sessions and she is always coming up with new ideas that can help put the group together. She
has made new friends from the widow’s group and she is no longer lonely like she was before. She says that her new friends are very helpful and encourage her at all times. She can now even visit friends and also have friends over at her place, something that she never did before`,
  },
  {
    id: "2",
    name: "John Muhinda",
    role: "Member",
    image: "/images/JohnMuhinda.jpg",
    quote: "'Society can turn against you': The story of John Muhinda",
    story: `A story of John Muhinda is much captivating and being amongst the widower’s group as a beneficiary, he shares a lot of his life experience that left us in surprise. Life has put him down to an extent of loosing hope and worthiness in his own community. Meeting John for the first time, you would think he is dumb and deaf. A soft-spoken old man has a lot in his mind and this makes him behave like a mentally challenged individual due to discrimination that has been drawn for him by the community. “Society can turn against you!!, John exclaims with a lot of disbelief. John recalls how his graph has dwindled all through his life and now sits as a fellow who never enjoyed life. He narrates his story, “I was a very respected member of this community because of my education and position I held in my life during my potential ages. I worked as a clerk in the Criminal Investigation Department (CID) office in Nairobi and was a very hardworking young man. Later on, at the end of my contract there, I joined the hotel industry and was a very qualified receptionist doubled with cashier at the hotel. I cared for my mother and other siblings for I was the first born partially orphaned. 

My family was recognized because of my prowess. We lived a very humble life with my siblings and mother and the community accorded us the respect we deserved. However, in the process, I developed some health complication in the year 1980 that brought me to be a useless person to date. I became withdrawn from the society and more of the impact has been felt by my family that made my mother die early after trying all the avenues to restore my health. I decided to be silence and not be involved in any growth and development that made me not even try to marry or even engage in any relationship. I have been very desolate and no one has ever known what I think or even need in my life. My younger brother married his wife in the year 1995 and the lady was much discouraged by the community of not accepting to stay in a homestead where a ‘mad man’ was. I behaved more abnormally, he recalls, why? Because I could not face all the challenges in my life. Some prominent members of the community seeing my condition, came and grabbed my piece of land believing that I am unable to challenge them. Indeed, I am not able to challenge them and now I live in my community as a refugee and owns no voice and property. People know me as a mad man and even the children that have grown in my era, understand me as a mad man. 

I believe God knows why all these had to happen. I am humbled to have been blessed with my brother’s wife whom after all the efforts of discouragement, stood her ground and told my brother that she will take care of me which she does to date. Her parents came for her in the year 1998, to separate them because of me, but she was adamant and has acted like my mother in caring for me”. John narrated his story calmly and he moved us by his smart memory. The brother was astonished to his opening up and sharing with RSA Psychologist.

During the counseling session, John testified that he never bothered to have a family because he was ugly and poor; most ladies looked down upon him and thus has never had interest in engaging any lady and opted to live a desperate life. John has had a rough time to live and talks softly to testify of the life being technical. He narrates his story and recalls how he excelled in school amongst his peers and no one would challenge him. He says, it has been hard but he thanks the Almighty for having brought RSA and the community strategies to reach out to him and make him open up through counseling sessions. He is one of our beneficiaries who calls himself, “Single”, and has accepted to live so in his entire life. At the age of 70, he trusts that his transformation has come and will be able to adjust and interact again with the society. However, he says that what is lost, is lost. Below are some pictures of John during the psychosocial counseling.`,
  },
  {
    id: "3",
    name: "Bible Study Group",
    role: "Program Participants",
    image: "/images/PHOTO-2025-12-10-15-01-26.jpg",
    quote:
      "I have experienced much with RSA Bible study, today I can read the Bible and know God. In our church, we were not allowed to read but to listen.",
    story: `Statistically, at least 80% of the beneficiaries have developed a lot of interests in scriptural reading and searching through the verses that has seen them discuss more about the word and develop an urge to reach out to other locals in the communities to share the word. It has of much value to see a true transformation of the locals and more so those neglected and discriminated against due to age, vulnerability and poverty. Due to demand of very many things of the needy locals, hope was lost and low self-esteem developed with much lack of worthiness in life. Discovery Bible Study program has elevated the people’s understanding and the beneficiaries have started developing a culture of sharing the word through their words, deeds and actions. Some of them have got feelings and testimonies in regards to where they were and the current life.
    
    As one man puts it, “I have experienced much with RSA Bible study, today I can read the Bible and know God. In our church, we were not allowed to read but to listen. I am happy for what RSA has done for us. I Love God. I was chosen from my church to go and attend a seminar in Kajiado because of the wisdom RSA has given me. My speech is accepted and people can now listen to me even at my own home.”`,
  },
];

const VoicesOfImpact: React.FC = () => {
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Voices of Impact
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from our community members whose lives have been
            touched, transformed, and renewed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {voices.map((voice) => (
            <div
              key={voice.id}
              className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={voice.image}
                  alt={voice.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">
                    Read full story &rarr;
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {voice.name}
                  </h3>
                  <p className="text-primary-600 text-sm font-medium uppercase tracking-wide">
                    {voice.role}
                  </p>
                </div>
                <p className="text-slate-600 italic mb-6 line-clamp-3 flex-grow">
                  "{voice.quote}"
                </p>
                <button
                  onClick={() => setSelectedVoice(voice)}
                  className="text-primary-800 font-bold hover:text-primary-600 transition-colors inline-flex items-center"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VoicesModal
        isOpen={selectedVoice !== null}
        onClose={() => setSelectedVoice(null)}
        voice={selectedVoice}
      />
    </section>
  );
};

export default VoicesOfImpact;
