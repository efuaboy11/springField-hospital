import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Header, Navbar } from "../../component/navbar"
import { Link } from "react-router-dom"
import { Footer } from "../../component/footer"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import nigeriaMap from '../../img/nigeriaMap.jpg'
import togetherness from '../../img/togetherness.jpg'
import heartIcon from '../../img/heart-icon.jpg'
import HotLineDetails from "../../component/hotlineDetails"
import strategies1 from "../../img/strategies1.jpg"
import strategies2 from "../../img/strategies2.png"
import strategies3 from "../../img/strategies3.png"
import strategies4 from "../../img/strategies4.png"
import strategies5 from "../../img/strategies5.png"
import strategies6 from "../../img/strategies6.png"
import strategies7 from "../../img/strategies7.png"
import strategies8 from "../../img/strategies8.png"
import { Helmet } from "react-helmet-async"


export const CopyStrategies = () =>{
  const { 
    OnbodyClick, 

  } = useContext(AuthContext)

  return(
    <div>
      <Helmet>
        <title>Coping Strategies & Self-Care | Springfield Mental Health and Psychosocial Services</title>
        <meta name="description" content="Discover effective coping strategies and self-care techniques to improve mental well-being at Springfield Mental Health and Psychosocial Services." />
        <meta name="keywords" content="Coping Strategies, Self-Care, Mental Wellness, Stress Management, Emotional Health, Springfield Psychosocial Services, Healthy Habits" />
        <meta property="og:title" content="Coping Strategies & Self-Care | Springfield Mental Health and Psychosocial Services" />
        <meta property="og:description" content="Learn practical ways to manage stress, build resilience, and enhance your mental health through self-care." />
      </Helmet>

      <div>
        <Header />
      </div>
      <div className="position-sticky1">
        <Navbar />
      </div>


      <div onClick={OnbodyClick}>
        <div>
          <div className="light-background2 mb-5">
            <div className="py-5 container-lg">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <p className="site-primary-text md-text font-bold">Coping Strategies & Self-Care</p>
                  <p className="pt-2"><Link to='/' className="Link"><i class="bi bi-house"></i> Home</Link> <i class="ri-arrow-right-fill"></i> Get Information <i class="ri-arrow-right-fill"></i>Coping Strategies & Self-Care</p>
                </div>
                
              </div>
            </div>
          </div>

          <section className="site-section-container">
            <div className="container-lg">
              <div className="row">
                <div className="col-xl-7 col-lg-9 col-md-11  responsive-centralized-text">
                  <div className="light-background2 p-4">
                    <p className="site-header pb-5">Understanding the Importance of Coping Strategies & Self-Care</p>
                    <p className="light-text-2">In today’s fast-paced world, stress, anxiety, and emotional challenges have become a part of daily life. Whether you’re dealing with work stress, personal struggles, mental health challenges, or overwhelming emotions, having effective coping strategies and self-care routines can make a significant difference in your well-being. <br /> <br />
                    Coping strategies are healthy ways to manage stress, emotions, and life challenges, while self-care involves deliberate actions to nurture your mind, body, and soul. When practiced consistently, they enhance emotional resilience, boost mental strength, and improve overall health.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <p className="sm-text font-bold site-primary-text text-center uppercase">A Day in the Life: The Power of Self-Care & Coping Strategies</p>
                <p className="font-bold ps-5 p-4 responsive-centralized-text">Meet Tolu and Chinedu</p>
                <div>
                  <div className="mb-4 d-flex align-center">
                    <i class="ri-circle-fill site-primary-text d-none d-md-block me-4 "></i>  
                    <div className="light-border p-4 border-radius-10px">
                      <p className="font-bold pb-2">Tolu’s Day:</p>
                      <p className="light-text-2">Tolu, a 32-year-old software developer, often feels drained and anxious due to long hours of work. She frequently skips meals, neglects sleep, and barely has time for herself. As a result, she experiences burnout, mood swings, and a lack of motivation.</p>
                    </div>
                  </div>

                  <div className="d-flex align-center mb-4">
                    <i class="ri-circle-fill site-primary-text d-none d-md-block me-4 "></i>
                    <div className="light-border p-4 border-radius-10px">
                      <p className="font-bold pb-2"> Chinedu’s Day:</p>
                      <p className="light-text-2">Chinedu, a 28-year-old teacher, also faces stressful days, but he practices healthy coping strategies. He starts his day with meditation, takes breaks when needed, exercises regularly, and journals before bed. This helps him stay focused, emotionally balanced, and physically healthy.</p>
                    </div>
                  </div>

                  <div className="d-flex align-center">
                    <i class="ri-circle-fill site-primary-text d-none d-md-block me-4 "></i>
                    <div className="light-border p-4 border-radius-10px">
                      <p className="font-bold pb-2"> Difference:</p>
                      <p className="light-text-2">While both experience stress, Chinedu’s self-care habits help him manage challenges better, while Tolu’s neglect of self-care worsens her stress levels. <br /> self-care isn’t a luxury—it’s a necessity. Whether you are dealing with everyday stress or deeper mental health struggles, the way you cope and care for yourself matters. !!!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="site-section-container">
            <div className="container-lg">
              <div>
                <p className="sm-text font-bold uppercase text-center site-primary-text">The 7 Pillars of Self-Care: Prioritizing Your Well-Being</p>
                <p className="light-text-2 pt-2  pb-5 mb-4 text-center">Self-care is about taking intentional steps to nurture your physical, emotional, and mental health. Here are 7 pillars of self-care to incorporate into your routine:</p>

                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">01</p>
                        <p className="sm-text font-bold pb-4">Physical Self-Care </p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Exercise regularly (walking, stretching, dancing, sports).</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Get enough sleep (7-9 hours per night).</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Eat nutritious meals and drink plenty of water.</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">02</p>
                        <p className="sm-text font-bold pb-3">Emotional Self-Care </p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Acknowledge and express your emotions instead of suppressing them.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Journal, paint, or talk to a trusted friend.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Avoid toxic environments or relationships.</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">03</p>
                        <p className="sm-text font-bold pb-3">Social Self-Care </p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Spend quality time with loved ones.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Set healthy boundaries in relationships.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Join community groups or clubs to connect with others.</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">04</p>
                        <p className="sm-text font-bold pb-3">Mental Self-Care</p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Read books, listen to podcasts, or take a new course.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Engage in puzzles or problem-solving activities to keep your mind sharp.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Take breaks from social media and news overload.</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">05</p>
                        <p className="sm-text font-bold pb-3"> Spiritual Self-Care </p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Engage in prayer, meditation, or personal reflection.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Practice gratitude and focus on things you are thankful for.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Spend time in nature or quiet spaces to find inner peace.</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">06</p>
                        <p className="sm-text font-bold pb-3">Professional Self-Care</p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Take breaks at work to avoid burnout.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Maintain a work-life balance—don’t let work consume your personal time.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Set career goals and celebrate small achievements.</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="boxes-shadow p-4 border-radius-5px">
                      <div>
                        <p className="get-information-mentalhealth-stats-number pb-3">07</p>
                        <p className="sm-text font-bold pb-3">Fun & Recreational Self-Care</p>
                        <div>
                          
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Engage in hobbies that bring joy (music, games, traveling, art).</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Take time to laugh, play, and enjoy life.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Try new activities to break the routine and stay inspired.</p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section className="site-section-container">
              <div className="container-lg">
                <p className="sm-text font-bold uppercase text-center site-primary-text">Healthy Coping Strategies: Managing Stress & Emotions Effectively</p>
                <p className="light-text-2 pt-2  pb-5 mb-5 text-center">Coping strategies help you navigate difficulties without feeling overwhelmed. Below are healthy ways to cope with stress, anxiety, and emotional challenges:</p>
                <div className="row gy-5 gx-4">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={strategies8} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Practice Deep Breathing & Mindfulness</p>
                        <div className="pt-4">
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">   Try deep breathing exercises (e.g., inhale for 4 seconds, hold for 4 seconds, exhale for 6 seconds).</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">   Practice mindfulness by focusing on the present moment instead of worrying about the past or future.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">   Meditation helps calm the mind and reduce anxiety.</p>
                          </div>

                        </div>
                        
                      </div>

                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={strategies7} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Stay Active & Exercise Regularly</p>
                        <div className="pt-4">
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Physical activity releases endorphins (feel-good hormones) that boost mood.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Activities like walking, dancing, yoga, or stretching can reduce stress and improve focus.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">  Even 10-15 minutes of movement can help!</p>
                          </div>

                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={strategies6} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Express Yourself Creatively</p>
                        <div className="pt-4">
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Write in a journal to process emotions.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Engage in art, music, poetry, or photography as a form of emotional release.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Creative outlets help you channel your feelings in a productive way.</p>
                          </div>

                        </div>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={strategies5} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Build a Support System </p>

                        <div className="pt-4">
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Talk to trusted friends, family, or a counselor when feeling overwhelmed.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Surround yourself with positive and supportive people.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Example: Instead of “I’ll never get through this,” say “I am doing my best, and I will overcome this step by step.”</p>
                          </div>

                        </div>
                      
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={strategies4} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2"> Challenge Negative Thoughts </p>

                        <div className="pt-4">
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Recognize when you're thinking negatively or self-critically.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Replace negative thoughts with realistic and positive affirmations.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Creative outlets help you channel your feelings in a productive way.</p>
                          </div>

                        </div>
                      
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={strategies3} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2"> Set Boundaries & Say No</p>

                        <div className="pt-4">
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Learn to say NO to things that drain your energy or stress you out.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Avoid overcommitting yourself to tasks or people.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2"> Protect your time, emotions, and energy.</p>
                          </div>

                        </div>
                      
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={strategies2} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Engage in Healthy Distractions</p>

                        <div className="pt-4">
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Take breaks to watch a movie, listen to music, read a book, or play a game.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Engaging in fun activities can help shift focus from stress.</p>
                          </div>

                        </div>
                      
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div>
                      <img src={strategies1} width='80px' alt="" />
                      <div className="pt-4">
                        <p className="font-bold sm-text pb-2">Seek Professional Help When Needed</p>

                        <div className="pt-4">
                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">If you feel overwhelmed, anxious, or persistently sad, don’t hesitate to reach out to a therapist, counselor, or psychiatrist.</p>
                          </div>

                          <div className="d-flex pb-3">
                            <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                            <p className="light-text-2">Therapy is not a sign of weakness—it’s a step toward healing.</p>
                          </div>

                        </div>
                      
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>


          <section className="site-section-container">
            <div className="container-lg">
              <div className="row g-4">
              <div className="col-md-6">
                  <div>
                    <p className="sm-text font-bold site-primary-text  responsive-centralized-text">Breaking the Stigma Around Self-Care & Mental Health</p>
                    <div className="pt-4">
                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">Taking care of yourself helps you be more present for others.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2"> You cannot pour from an empty cup—prioritizing your well-being is essential.</p>
                      </div>

                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">Coping strategies reduce stress, prevent burnout, and improve mental health.</p>
                      </div>

                      <p className='sm-text font-bold site-primary-text py-4 responsive-centralized-text'>Final Thoughts: Start Small, Stay Consistent</p>
                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2">    Take 5 minutes to breathe deeply each morning.</p>
                      </div>


                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2"> Go for a short walk after work.</p>
                      </div>


                      <div className="d-flex pb-3">
                        <i class="ri-check-line pe-3 site-primary-text sm-text font-bold"></i> 
                        <p className="light-text-2"> Say one positive affirmation every day.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <img width='100%' src={togetherness} alt="" />
                  </div>
                </div>


              </div>
  
            </div>

          </section>


            <HotLineDetails />
      

        </div>

        <Footer />

      </div>


      
    </div>
      
  )
}