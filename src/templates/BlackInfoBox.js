import "./BlackInfoBox.css";
const BlackInfoBox = () => {
  return (
    <>
      <div className="BlackInfoBox">
      <article>
        <h2> What we do </h2>
        <p className="BoxTxt">
          {" "}
          We look forward to customising a system to meet your needs. We don’t
          favour one manufacturer over another – the only thing we do favour is
          making sure our customers get the right product that suits their needs
          and listening preferences. We will ask many questions in order to
          ensure that what you buy from us is tailored to you and you alone. If
          you are looking for a product not found in our demonstration showrooms
          or our online site, don’t fret as we have access to hundreds of
          brands. One of our biggest pleasures of working in this industry is to
          see the smile on our customers’ faces when they finally hear and see
          the system of their dreams.
        </p>
        </article>
      <article className="BoxTxt__OpenHours">
        <h2> Opening hours </h2>
        
        <p>
          {" "}
          Edinburgh 2 Joppa Rd,Edinburgh, EH15 2EU Monday to Friday: 10:00am -
          5:30pm Saturday: 10:00am - 5:30pm Sunday: Closed <br/> Falkirk 44 Cow Wynd,
          Falkirk, Central Region, FK1 1PU Monday to Friday: 10:00am - 5:30pm
          Saturday - By appointment only Sunday: Closed
        </p>
        </article>
      </div>
    </>
  );
};

export default BlackInfoBox;
