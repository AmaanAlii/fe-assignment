import React from "react";
import "./footer.css";
import { useForm, Controller } from "react-hook-form";
import FooterBackImg from "../../Assets/Footer/Footer-BackdropImg.png";

function Footer() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendClick = () => {
    handleSubmit(onSubmit)();
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const footerStyle = {
    background: `url(${FooterBackImg}) lightgray 50% / cover no-repeat`,
  };
  return (
    <div className="fe-footer" style={footerStyle}>
      <div className="footer-mid-section">
        <div className="footer-top">
          <div className="footer-left-text">
            <h4>Newslleter</h4>
            <span>Get news about articles and updates in your inbox.</span>
          </div>
          <div className="footer-right-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input type="text" placeholder="Name" {...field} />
                )}
              />
              {errors.name && <span>Name is required</span>}

              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                }}
                render={({ field }) => (
                  <input type="email" placeholder="Email" {...field} />
                )}
              />
              {errors.email && <span>Invalid email address</span>}

              <Controller
                name="message"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <textarea
                    placeholder="Message"
                    rows="4"
                    {...field}
                  ></textarea>
                )}
              />
              {errors.message && <span>Message is required</span>}
            </form>
          </div>
        </div>
        <div className="footer-bottom-text-section">
          <div className="footer-bottom-text">
            <div className="footer-text-section-a">
              <h1>GET </h1>
            </div>
            <div className="footer-text-section-b">
              <h1>IN</h1>
              <h1>TOUCH</h1>
            </div>
          </div>
          <button onClick={handleSendClick}>SEND</button>
        </div>
      </div>
      <div className="footer-copyright-section">
        <span>Copyright 2022 All Right Reserved By SG</span>
      </div>
    </div>
  );
}

export default Footer;
