import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import ShineBorderDemo from '../../Components/ShineBorderDemo'
import { TextReveal } from "@/components/magicui/text-reveal";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target; // Get the form element

    emailjs
      .sendForm(
        "service_kt2r75m", // Service ID
        "template_3sj5rdp", // Template ID
        form, // Form element
        "9JRN2ziNFqaUZLdBd" // Public key
      )
      .then(
        () => {
          Swal.fire({
            title: "Thanks for your interest",
            icon: "success",
            draggable: true,
          });
          form.reset(); // Reset form after success
        },
        
      ).catch(()=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "there is some issue",
        });
      })
  };

  return (
    <section className="bg-secondary bg-opacity-5 border-y border-gray-600">
     
      <div className="container grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-2">
          <h2 className="text-5xl font-semibold">Let’s chat.</h2>
          <h2 className="text-5xl font-semibold !mb-4">
            Tell me about your project.
          </h2>
          <small>Let’s create something together.</small>
          <div className="flex items-center mt-4">
            <div className="text-2xl mr-2">
              <MdEmail />
            </div>
            <div>
              <h4 className="text-sm">To: jamanhasan246@gmail.com</h4>
            </div>
          </div>
        </div>
        <div>
      
          <form
            onSubmit={sendEmail}
            className="card-body relative  bg-black/40 "
          >
               <ShineBorderDemo/>
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                name="from_name" // Matches {{from_name}} in the template
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="reply_to" // Matches {{reply_to}} in the template
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
    
            <div className="form-control">
              <label htmlFor="message" className="label">
                <h5 className="label-text font-semibold text-sm">
                  Tell me more about your project
                </h5>
              </label>
              <textarea
                id="message"
                name="message" // Matches {{message}} in the template
                placeholder="Message"
                className="input input-bordered  h-24"
                required
              ></textarea>
            </div>
            {/* Hidden input for `to_name` */}
            <input type="hidden" name="to_name" value="Jaman Hasan" />
            <div className="form-control mt-6">
              <button type="submit" className="button py-3  ">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
