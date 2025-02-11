import upiQr from "../../../assets/upiQr.png";
const Content = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-md-1 "></div>
        <div className="col-md-10 col-12 justify-content-start">
          <p className="idea-content-p mt-5">
            We get plenty of requests coming our way every week, each situation
            is unique and genuine in its own way. Without generous donors like
            you, we would never be able to fulfill the needs of people who need
            them the most. For that, we truly thank you. Your donation will
            change the lives of many people who are less fortunate and need some
            help getting their lives back on track. We strive hard to identify
            the genuine beneficiaries to ensure that your donations make the
            biggest impact on the lives of people who need them the most.
          </p>
          <p className="idea-content-p">
            Rest assured, we charge zero fees on your donations. Every single
            rupee you donate goes entirely to the needy. All administrative
            expenses are borne by the founders of Sukruthi Charitable Trust.
          </p>
          <p className="idea-content-p">
            All donations made should be in Indian Rupees only.
          </p>
          <p className="idea-content-p">
            All donations made to Sukruthi Charitable Trust are tax exempt under
            Section 80 G (5) (iv) of the Income Tax Act 1961 with provisional
            registration number ABBTS8660GF20213 on 13th Nov 2021 for the
            duration 13-11-2021 to AY 2024-25.
          </p>
          <p className="idea-content-p">
            As per the rules of the Indian Income Tax department, a donor is
            required to share their full residential address and PAN number if
            they wish to receive the 80G tax exemption certificate.
          </p>

          <p className="idea-content-p">
            Your voice can be just as important as your wallet in helping to
            support the causes you care about. Follow great organizations on
            social media and share posts that showcase their work or educate
            about the issues. If you can commit the time, agree to help with
            fundraising or volunteering. Or, you can give specifically to
            organizations or projects that help to shine light on an important
            issue, which can lead to greater awareness and additional support.
          </p>

          <h3>Cheque/IMPS/NEFT/RTGS/UPI/ QR Code</h3>
          <p className="idea-content-p">
            <strong>Account Name:</strong> Sukruthi Charitable Trust
          </p>
          <p className="idea-content-p">
            <strong>Bank:</strong> HDFC bank Savings account A/c #
            50200059889030
          </p>
          <p className="idea-content-p">
            <strong>IFSC Code:</strong> HDFC0000875
          </p>
          <p className="idea-content-p">
            <strong>Address:</strong> Sukruthi Charitable Trust, #503, Tushti,
            1st Cross, 2nd Main, AGs Layout, Bangalore - 560061
          </p>
          <p className="idea-content-p">
            <strong>WhatsApp No:</strong> +919606993333
          </p>
          <p className="idea-content-p">
            <strong>UPI IDs :</strong>
          </p>
          <p className="idea-content-p">sukruthitrust@okhdfcbank</p>
          <p className="idea-content-p">sukruthitrust@okicici</p>
          <p className="idea-content-p">sukruthitrust@okaxis</p>
          <p className="idea-content-p">sukruthitrust@oksbi</p>
          <img className="upi-qr" src={upiQr} />
        </div>
      </div>
    </div>
  );
};
export default Content;
