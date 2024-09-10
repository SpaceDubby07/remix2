import { GiLifeBar } from 'react-icons/gi';
import Header from '~/components/header';
import Hero from '~/components/hero';
import SlotBar from '~/components/slotBar';

export default function Care() {
  return (
    <>
      <div>
        <Header />
        <Hero
          title="Breed Traits & Characteristics"
          description=""
          img="https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1685787498.877709/fun-facts-about-siberian-huskies-1.png"
        />
      </div>
      <div className="p-6 sm:p-8 md:p-16">
        <section className="mb-12" id="average">
          <h1 className="text-2xl text-center mb-6">
            Average sizes and life expectancy
          </h1>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl my-4">
              <div className="card-body flex flex-col justify-between items-center">
                <GiLifeBar
                  size={46}
                  className="mx-2 mt-4 text-red-400"
                />
                <h2 className="card-title">Life Expectancy</h2>
                <p>12 - 14 years</p>
              </div>
            </div>
            <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl my-4">
              <div className="card-body flex flex-col justify-between items-center">
                <img
                  src="/scale.png"
                  alt="scale"
                  height={64}
                  width={64}
                />
                <h2 className="card-title">Weight</h2>
                <p>Male: 45-60 pounds</p>
                <p>Female: 35-50 pounds</p>
              </div>
            </div>
            <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl my-4">
              <div className="card-body flex flex-col justify-between items-center">
                <svg className="h-16" viewBox="0 0 79 54">
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M54.9 52.627c-3.466.296-4.661-1.02-4.247-4.322.183-1.46.023-2.973-.118-4.45-.306-3.235-.751-6.459-1.028-9.695-.094-1.105-.523-1.484-1.654-1.73-3-.65-5.952-1.497-9.039-2.296-3.087-.798-2.359-1.124-3.843-.737-1.484.388-1.474 1.004-2.233 2.324-1.658 2.885-3.918 5.374-6.896 7.065-3.446 1.956-3.36 5.301-4.03 8.365-.283 1.298-.21 2.505 1.336 3.321.506.267.528 1.364.772 2.082-.6.156-1.214.487-1.797.442-3.901-.302-4.345-.958-3.959-4.807.163-1.622.029-3.28-.089-4.915-.163-2.268-.287-4.408 1.54-6.319 2.305-2.412 1.949-5.425 1.229-8.274-.615-2.429-1.66-4.76-2.591-7.348-.764.507-1.762 1.098-2.67 1.794-.898.689-1.695 1.497-2.557 2.23-2.906 2.472-6.257 2.545-9.766 1.567-.466-.13-.842-.55-1.26-.835l.137-.465c1.176 0 2.359-.076 3.527.016 2.44.19 4.398-.708 6.123-2.244 1.804-1.607 3.598-3.225 5.439-4.793 3.98-3.39 8.539-4.964 13.989-4.682 5.64.294 11.304.345 16.868-1.169 3.875-1.055 6.707-3.017 8.594-6.465 1.05-1.92 2.641-2.895 4.06-4.618.33-.4.938-.81 1.437-.833 2.902-.132 6.042-.836 8.24 1.077.234.203.59.43.592.648.024 2.907 2.862 3.227 4.584 4.563.361.28.868.425 1.151.754.21.243.334.756.209 1.028-1.821 3.911-4.163 5.034-8.734 4.347-.488-.074-1.21.111-1.543.437-2.522 2.466-3.38 5.732-4.13 8.902-.649 2.746-1.488 5.367-3.31 7.521-3.25 3.844-4.055 8.361-4.478 13.032-.09.995.06 2.015-.085 2.998-.266 1.785-.282 3.363 1.765 4.318.435.204 1.028.868 1.028 1.702s-1.842.402-2.562.464z"
                      stroke="#BABABA"
                      mask="url(#mask-2)"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 19.667h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 22.94h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 92 0)"
                      d="M55 13H37"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 16.273h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 26.333h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 29.607h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 33h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 36.273h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 39.667h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 42.94h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 46.333h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 49.607h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 92 0)"
                      d="M46.137 13.365L45.922 53"
                    ></path>
                  </g>
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M54.9 52.627c-3.466.296-4.661-1.02-4.247-4.322.183-1.46.023-2.973-.118-4.45-.306-3.235-.751-6.459-1.028-9.695-.094-1.105-.523-1.484-1.654-1.73-3-.65-5.952-1.497-9.039-2.296-3.087-.798-2.359-1.124-3.843-.737-1.484.388-1.474 1.004-2.233 2.324-1.658 2.885-3.918 5.374-6.896 7.065-3.446 1.956-3.36 5.301-4.03 8.365-.283 1.298-.21 2.505 1.336 3.321.506.267.528 1.364.772 2.082-.6.156-1.214.487-1.797.442-3.901-.302-4.345-.958-3.959-4.807.163-1.622.029-3.28-.089-4.915-.163-2.268-.287-4.408 1.54-6.319 2.305-2.412 1.949-5.425 1.229-8.274-.615-2.429-1.66-4.76-2.591-7.348-.764.507-1.762 1.098-2.67 1.794-.898.689-1.695 1.497-2.557 2.23-2.906 2.472-6.257 2.545-9.766 1.567-.466-.13-.842-.55-1.26-.835l.137-.465c1.176 0 2.359-.076 3.527.016 2.44.19 4.398-.708 6.123-2.244 1.804-1.607 3.598-3.225 5.439-4.793 3.98-3.39 8.539-4.964 13.989-4.682 5.64.294 11.304.345 16.868-1.169 3.875-1.055 6.707-3.017 8.594-6.465 1.05-1.92 2.641-2.895 4.06-4.618.33-.4.938-.81 1.437-.833 2.902-.132 6.042-.836 8.24 1.077.234.203.59.43.592.648.024 2.907 2.862 3.227 4.584 4.563.361.28.868.425 1.151.754.21.243.334.756.209 1.028-1.821 3.911-4.163 5.034-8.734 4.347-.488-.074-1.21.111-1.543.437-2.522 2.466-3.38 5.732-4.13 8.902-.649 2.746-1.488 5.367-3.31 7.521-3.25 3.844-4.055 8.361-4.478 13.032-.09.995.06 2.015-.085 2.998-.266 1.785-.282 3.363 1.765 4.318.435.204 1.028.868 1.028 1.702s-1.842.402-2.562.464z"
                      stroke="#BABABA"
                      mask="url(#mask-2)"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 19.667h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 22.94h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 92 0)"
                      d="M55 13H37"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 16.273h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 26.333h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 29.607h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 33h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 36.273h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 39.667h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 42.94h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 96 0)"
                      d="M50 46.333h-4"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 94 0)"
                      d="M48 49.607h-2"
                    ></path>
                    <path
                      stroke="#09F"
                      mask="url(#mask-2)"
                      transform="matrix(-1 0 0 1 92 0)"
                      d="M46.137 13.365L45.922 53"
                    ></path>
                  </g>
                </svg>
                <h2 className="card-title">Height</h2>
                <p>Male: 21-23.5 inches</p>
                <p>Female: 20-22 inches</p>
              </div>
            </div>
          </div>
        </section>
        <section id="traits">
          <h1 className="text-2xl text-center mb-6">
            Breed Traits & Characteristics
          </h1>
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Family"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <SlotBar
                title="Affectionate With Family"
                filledSlots={[0, 1, 2, 3, 4]}
                startLabel="Independant"
                endLabel="Lovey Dovey"
              />
              <SlotBar
                title="Good with Children"
                filledSlots={[0, 1, 2, 3, 4]}
                startLabel="Not Recommended"
                endLabel="Good with Children"
              />
              <SlotBar
                title="Good With Other Dogs"
                filledSlots={[0, 1, 2, 3, 4]}
                startLabel="Not Recommended"
                endLabel="Good With Other Dogs"
              />
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Physical"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <SlotBar
                title="Shedding Levels"
                filledSlots={[0, 1, 2, 3]}
                startLabel="None"
                endLabel="Hair Everywhere"
              />
              <SlotBar
                title="Grooming Frequency"
                filledSlots={[0, 1]}
                startLabel="Monthly"
                endLabel="Daily"
              />
              <SlotBar
                title="Drool Levels"
                filledSlots={[0]}
                startLabel="Less Likely"
                endLabel="Bring a Towel"
              />
              <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md my-4">
                <div className="card-body">
                  <h2 className="text-xl font-bold mb-4 text-center">
                    Coat
                  </h2>
                  <div className="flex justify-around mb-2">
                    <span className="text-xs text-gray-600">
                      Type: Double
                    </span>
                    <span className="text-xs text-gray-600">
                      Length: Medium
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Social"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <SlotBar
                title="Openess to Strangers"
                filledSlots={[0, 1, 2, 3, 4]}
                startLabel="None"
                endLabel="Hair Everywhere"
              />
              <SlotBar
                title="Watchdog/Protective Nature"
                filledSlots={[0]}
                startLabel="What's mine is yours"
                endLabel="Vigilant"
              />
              <SlotBar
                title="Playfulness"
                filledSlots={[0, 1, 2, 3, 4]}
                startLabel="Never"
                endLabel="Non-Stop"
              />
              <SlotBar
                title="Adaptability"
                filledSlots={[0, 1, 2, 3, 4]}
                startLabel="Lives for Routine"
                endLabel="Highly Adaptable"
              />
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Personality"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <SlotBar
                title="Trainability"
                filledSlots={[0, 1, 2]}
                startLabel="Self-Willed"
                endLabel="Eager to Please"
              />
              <SlotBar
                title="Barking Levels"
                filledSlots={[0, 1, 2, 3, 4]}
                startLabel="Only to Alert"
                endLabel="Vocal"
              />
              <SlotBar
                title="Energy Levels"
                filledSlots={[0, 1, 2, 3, 4]}
                startLabel="Low"
                endLabel="High"
              />
              <SlotBar
                title="Mental Stimulation"
                filledSlots={[0, 1, 2, 3]}
                startLabel="Happy to Lounge"
                endLabel="Needs an Activity"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
