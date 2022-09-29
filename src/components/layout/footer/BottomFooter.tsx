const BottomFooter = () => {
  return (
    <div className=" flex-row w-max mx-auto justify-center items-center py-8">
      <h6 className="w-max mx-auto pb-4">© 2020-2022, ТОВ «Медіа Мережі»</h6>
      <div className="flex gap-8">
        <a
          href="https://support.iconfinder.com/en/articles/18231-license-basic"
          target="blank"
        >
          Політика користувача
        </a>
        <a
          href="https://www.privacypolicies.com/blog/privacy-policy-template/"
          target="blank"
        >
          Політика конфіденційності
        </a>
        <a href="https://www.w3schools.com/js/js_cookies.asp" target="blank">
          Політика Cookie-файлів
        </a>
      </div>
    </div>
  );
};

export default BottomFooter;
