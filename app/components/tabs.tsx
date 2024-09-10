import Tab from './tab';

export default function Accordian() {
  return (
    <div className="mt-10 max-w-2xl">
      <div role="tablist" className="tabs tabs-bordered">
        <Tab
          label="Health"
          description="Fortunately, the Siberian Husky is a relatively healthy breed. Responsible breeders screen their breeding stock for health problems such as juvenile cataracts, and the breed's national parent club, the Siberian Husky Club of America, has strict guidelines to help reduce reported cases. Beginning at 12 months of age, all Siberians who potentially will be part of a breeding program should be examined by a canine ophthalmologist. The exam is then repeated on a yearly basis. New screenings and tests are being constantly being developed to help breeders in their selection of a potential dam and sire. Knowledgeable breeding practices ensure the future health of the breed. Owners of working Siberians need to closely monitor each dog to be able to recognize when something just isn't right. Having a veterinarian familiar with working dogs is an advantage."
        />
        <Tab
          label="Grooming"
          description="Siberian Huskies are considered a 'natural' breed. They are remarkably self-cleaning and often need only a few baths a year, unless being shown in conformation dog shows. Weekly brushings help keep the coat and skin in good condition. Siberians have a double coat'an undercoat, and guard hair. The undercoat is shed twice a year, and it is important to continually 'rake out' the old coat, using a pin brush and metal comb. Pay close attention to the length of the nails, and keep them trimmed to prevent any foot problems. Siberians competing in conformation require a bit more selective grooming for the best presentation."
        />
        <Tab
          label="Exercise"
          description="Siberians are active, athletic dogs who need a lot of exercise. They are a working breed and happiest when they have a function to perform. Regular exercise is important both physically and mentally, and doing activities together strengthens the bond between dog and owner. Siberians were bred to run and will do so at every opportunity; it is vital to keep the dog on a leash, in harness, or in a fenced yard at all times. There are several AKC-sponsored activities that can be enjoyed by dog and owners'rally, agility, and obedience are a few. A busy and active Siberian is a happy and healthy Siberian. This breed is also very adaptable, and for those who live in a more urban setting, daily walks or doggie play groups can provide great exercise."
        />
        <Tab
          label="Training"
          description="All breeds benefit from early socialization, basic obedience training, and learning good manners, and the Siberian Husky is no exception. For those owners who want to work their dogs in harness, training for this requires hours of dedication and patience. There are several good books available on training for the trail that provide advice and information on getting started. The best approach is to make all training exercises fun for both dog and handler. Siberians are very social, and regularly need the company of their people or other dogs; they are not suited to being left alone all day. Most importantly, Siberians have an overwhelming desire to run, and they should be on leash or in a securely fenced-in area at all times and never allowed off lead."
        />
      </div>
    </div>
  );
}
