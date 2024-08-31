
const Footer = () => {
  return (
    <footer className="bg-white text-[#000000] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Language Selector */}
        <div className="mb-4 md:mb-0">
          <button
            id="zon-btn-lang"
            className="flex items-center bg-gray-700 text-white px-4 py-2 rounded"
          >
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
            >
              <path d="M480-100.001q-78.154 0-147.499-29.962-69.346-29.961-120.962-81.576-51.615-51.616-81.576-120.962Q100.001-401.846 100.001-480q0-78.769 29.962-147.807 29.961-69.038 81.576-120.654 51.616-51.615 120.962-81.576Q401.846-859.999 480-859.999q78.769 0 147.807 29.962 69.038 29.961 120.654 81.576 51.615 51.616 81.576 120.654Q859.999-558.769 859.999-480q0 78.154-29.962 147.499-29.961 69.346-81.576 120.962-51.616 51.615-120.654 81.576Q558.769-100.001 480-100.001Zm0-60.845q30.616-40.616 51.539-81.924 20.923-41.308 34.077-90.308H394.384q13.923 50.539 34.462 91.847 20.538 41.308 51.154 80.385Zm-77.46-11q-23-33-41.308-75.039t-28.462-86.193H197.076q31.693 62.309 85.001 104.694 53.309 42.385 120.463 56.538Zm154.92 0q67.154-14.153 120.463-56.538 53.308-42.385 85.001-104.694H627.23q-12.077 44.539-30.385 86.578t-39.385 74.654Zm-385.537-221.23h148.693q-3.769-22.308-5.461-43.731-1.692-21.424-1.692-43.193t1.692-43.193q1.692-21.423 5.461-43.731H171.923q-5.769 20.385-8.846 42.385Q160-502.539 160-480t3.077 44.539q3.077 22 8.846 42.385Zm208.692 0h198.77q3.769-22.308 5.462-43.347 1.692-21.038 1.692-43.577 0-22.539-1.692-43.577-1.693-21.039-5.462-43.347h-198.77q-3.769 22.308-5.462 43.347-1.692 21.038-1.692 43.577 0 22.539 1.692 43.577 1.693 21.039 5.462 43.347Zm258.769 0h148.693q5.769-20.385 8.846-42.385Q800-457.461 800-480t-3.077-44.539q-3.077-22-8.846-42.385H639.384q3.769 22.308 5.461 43.731 1.692 21.424 1.692 43.193t-1.692 43.193q-1.692 21.423-5.461 43.731ZM627.23-626.922h135.694Q730.846-690 678.5-731.616q-52.347-41.615-121.04-56.923 23 34.923 40.923 76.385 17.924 41.462 28.847 85.232Zm-232.846 0h171.232q-13.923-50.154-35.039-92.424-21.115-42.269-50.577-79.808-29.462 37.539-50.577 79.808-21.116 42.27-35.039 92.424Zm-197.308 0H332.77q10.923-43.77 28.847-85.232 17.923-41.462 40.923-76.385-69.077 15.308-121.232 57.116-52.154 41.808-84.232 104.501Z"></path>
            </svg>
            <span>English</span>
            <svg
              className="w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" fill="currentColor"></path>
            </svg>
          </button>
          {/* Dropdown menu here */}
        </div>

        {/* Rights and Policies */}
        <div className="text-center mb-4 md:mb-0">
          <p className="mb-2">© 2024All Rights Reserved.</p>
          <div>
            <a  className="hover:underline mx-1" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <span>・</span>
            <a  className="hover:underline mx-1" target="_blank" rel="noopener noreferrer">Terms</a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
