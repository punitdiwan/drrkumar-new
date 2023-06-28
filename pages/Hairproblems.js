import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Acnecard from "../Components/AcneSolutions/Acnecard";
import Form from "../Components/Form";
import Accordion from "../Components/Accordion";
import Acneglance from "../Components/AcneSolutions/Acneglance";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const Hairproblems = () => {
  return (
    <>
      <section style={{ fontSize: "12px" }}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Hair problems</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Hair problems</h2><br/>
          <h4>Hair Loss / Alopecia</h4>
          <p>
            Hair loss or alopecia as it is sometimes referred to affects both
            men and women. As each instance of hair loss occurs due to the
            unique result of several combinations of factors, each instance
            needs to be diagnosed and treated as a separate issue. Doctors
            basically differentiate hair loss into whether it Is localized (only
            a few discrete areas on the scalp), or diffused; between scarring
            and non-scarring patterns of hair loss – this is very important,
            because scarring alopecia implies destruction of the hair follicles,
            and results in permanent hair loss. It is not easy or even likely
            that a layman can determine whether he or she has scarring or
            non-scarring alopecia, so professional medical advice is needed as
            we would potentially be dealing with a very specific entity known as
            TELOGEN EFFLUVIUM. Hair Growth Cycles In order to establish whether
            hairfall is normal or not, we first need to understand the normal
            hair cycle.
          </p>
          <p>Normal hair grows in cycles and goes through 3 stages:</p>
          <li>A growing phase (Anagen)</li>
          <li>A resting phase (Telogen)</li>
          <li>A falling phase (Catagen)</li>
          <p>
            Unlike some animals which shed their hair, human hair growth is
            asynchronous – that means that there are hairs in different stages
            of the cycle at any one time, and the effect of normal or
            physiological hairfall is therefore not too obvious, because about
            80 to 90% of our scalp hairs are in the anagen phase. Hair grows at
            a rate of 1 to 2cm a month. At any time, it may thus be normal for a
            person to lose as many as 50 to 100 strands of hair daily and these
            usually show up on a comb or brush or on the bathroom floor,
            especially after washing your hair.
          </p>
          <h4>Types of Hair Loss</h4><br/>
          <li>Male Pattern Hair Loss</li>
          <p>
            Male pattern hair loss is the most common form of hair loss, with
            approximately 50% of all men experiencing it in their lives, with
            some men having it even in their 20s. Various factors contribute to
            this condition – stress, unhealthy diet, genetics, hormonal
            imbalance as well as ageing are all potential causes for this. Hair
            loss in men occurs mainly in 2 different patterns – an M shaped loss
            of hair around the forehead or an O shaped loss of hair around the
            crown.
          </p>
          <li> Female Pattern Hair Loss</li>
          <p>
            The main cause of Female pattern hair loss is genetic, just as in
            males. However, this hair loss can also be accelerated by various
            other factors, including stress, oral medication and other hormonal
            changes as a result of pregnancy and menopause. Postpartum hair loss
            (hair loss after pregnancy) is normal and quite common. Many women
            usually notice that their hair falls out in clumps right after
            giving birth and this hair loss accelerates for several months
            after. The official term for this form of hair loss is postpartum
            alopecia and it can affect up to 90% of women. Postpartum alopecia
            is related to the changing levels of progesterone and oestrogen
            during pregnancy – this causes hair to remain in the growth stage
            constantly during the second and third trimester of pregnancy and
            gives pregnant women their characteristic “thick and lustrous hair”.
            After childbirth however, the hormones level out and cause the next
            stage of the hair cycle to occur – the falling phase – which leads
            to postpartum hair loss. This period generally lasts for a few
            months before returning to normal. If the problem persists beyond 6
            months however, it is advisable for you to consult with a medical
            expert.
          </p>
          <li>Telogen Effluvium</li>
          <p>
            In most people, 5-15% of the hair on the scalp is in telogen at any
            given time. Telogen effluvium is triggered when a physiologic stress
            or hormonal change causes a large number of hairs to enter telogen
            at one time. Shedding does not occur until the new anagen hairs
            begin to grow, which takes 2-3 months usually. The emerging hairs
            help to force the resting hairs out of the follicle, which is why
            most people notice sudden increase in hair fall a few months after
            delivery, or after an acute illness. Post pregnancy telogen
            effluvium is one of the most common conditions we deal with in dr
            kumar clinic. The good news is that prognosis is excellent, and in
            almost all cases, recovery occurs within 6 months. It is uncommon
            for hair loss to persist longer than this, unless there are other
            medical issues that can also cause hair loss, such as androgenetic
            alopecia, iron deficiency, or thyroid disorders. You should continue
            to seek medical advice if the hair loss persists beyond this time
            frame.
          </p>
          <li>Alopecia Areata</li>
          <p>
          Hair loss can occur from various areas of the body, including the scalp. This condition is usually triggered by emotional stress and genetic factors. Hair loss is not confined to one particular spot on the scalp and comes and goes from various spots, and can lead to permanent hair loss.
Treatments for Hair Loss
Often, no specific treatment is required for telogen effluvium. We do occasionally prescribe supplements and in some cases topical therapy. We generally advise patients to continue to use a gentle shampoo, and to minimise activities that might result in excessive hair loss, such as rough combing/ brushing of the hair, or tying it in very tight braids or buns.
In order to reduce excessive hair loss that is noted after combing the hair, use a wide-tooth comb and avoid brushes. It is perfectly fine to shampoo your hair daily, and to keep your hairstyle short. Blow drying the hair is alright, but do not place the hair dryer too close to the scalp or hair, in order to reduce the heat build-up.
          </p>
        </div>

        <section className="footer">
          <div className="footer-1">
            <img src="./img1/logo.png" />
            {/* <h1>DR. KUMAR SKIN & LASER CLINIC</h1> */}
            <div className="footer-child">
              <Link href="/theclinic">The Clinic</Link>
              <Link href="/theteam">The Team</Link>
              <Link href="/thevisit">The Visit</Link>
            </div>
            <div className="footer-child">
              <a>Our Fees</a>
              <a>For Referrers</a>
              <a>Skin Care Tips</a>
            </div>
            <div className="footer-child">
              <a>Contact us</a>
              <a>Disclaimer</a>
              <a>Privacy Policy</a>
            </div>
            <div className="footer-child  footer1-child">
              <span>
                <a
                  href="https://www.facebook.com/drkumarskinandlaserclinic/"
                  target="_blank"
                >
                  <FaFacebookSquare />
                </a>
              </span>
              <span>
                <FaYoutube />
              </span>
              <span>
                <a href="http://instagram.com/drrajurims" target="_blank">
                  <FaInstagram />
                </a>
              </span>
            </div>
          </div>

          <div className="footer-2">
            <div className="policy" id="footer-policy">
              <div className="policy-row">
                <div className="policy-col">
                  {/* <p>Copyright © Dr. Saket Agrawal</p> */}
                  <p>© 2023 DR. KUMAR SKIN & LASER CLINIC.</p>
                </div>
                <div className="policy-col">
                  <p>
                    Design with
                    <span>
                      <FaHeart />
                    </span>
                    by&nbsp;
                    <a href="https://maitretech.com/">maitretech.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hairproblems;
