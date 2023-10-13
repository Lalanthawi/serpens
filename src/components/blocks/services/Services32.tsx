import { FC } from "react";
import NextLink from "components/reuseable/links/NextLink";
// -------- data -------- //
import { services } from "data/demo-30";

const Services32: FC = () => {
  return (
    <div className="container pt-6">
      <div className="row">
        <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
          <h2 className="display-2 mb-4">Solutions that we are offer</h2>
          <p className="lead fs-lg mb-11">
            Explore our comprehensive range of services, from full-stack
            development to tailored web solutions, designed to meet all your
            digital needs in one place.
          </p>
        </div>
      </div>

      <div className="row gx-md-8 gy-8 text-center mb-14 mb-md-17">
        {services.map(({ id, Icon, title }) => (
          <div className="col-md-6 col-lg-3" key={id}>
            <div className="svg-bg svg-bg-lg bg-white rounded-xl shadow-xl mb-6">
              <Icon className="solid-duo text-grape-fuchsia" />
            </div>

            <h3>{title}</h3>

            <p className="mb-3">
              Elevate your online presence with our expert web design services,
              where creativity meets cutting-edge technology for visually
              stunning and user-friendly websites
            </p>

            <NextLink title="Learn More" href="#" className="more hover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services32;
