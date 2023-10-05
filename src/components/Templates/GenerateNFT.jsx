import React from "react";

const GenerateNFT = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-[296px] w-[489px] border border-black"></div>
      <button className="h-[48px] border-2 border-[#D34D3E] flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17.3006 10.5008H23.1986C23.2699 10.5008 23.3397 10.5211 23.3998 10.5594C23.4599 10.5976 23.5079 10.6522 23.5381 10.7167C23.5683 10.7813 23.5795 10.8531 23.5704 10.9237C23.5613 10.9944 23.5322 11.061 23.4866 11.1158L20.5376 14.6558C20.5024 14.698 20.4584 14.7319 20.4086 14.7552C20.3589 14.7785 20.3046 14.7906 20.2496 14.7906C20.1947 14.7906 20.1404 14.7785 20.0906 14.7552C20.0409 14.7319 19.9968 14.698 19.9616 14.6558L17.0126 11.1158C16.967 11.061 16.938 10.9944 16.9289 10.9237C16.9197 10.8531 16.931 10.7813 16.9612 10.7167C16.9914 10.6522 17.0394 10.5976 17.0995 10.5594C17.1596 10.5211 17.2294 10.5008 17.3006 10.5008ZM0.800641 13.5008H6.69864C6.7699 13.5007 6.83967 13.4804 6.89979 13.4422C6.95991 13.4039 7.00789 13.3493 7.03811 13.2848C7.06833 13.2203 7.07953 13.1485 7.07042 13.0778C7.06131 13.0071 7.03224 12.9405 6.98664 12.8858L4.03764 9.34577C4.00245 9.30357 3.95841 9.26961 3.90864 9.24631C3.85887 9.22301 3.80459 9.21094 3.74964 9.21094C3.69469 9.21094 3.64041 9.22301 3.59064 9.24631C3.54087 9.26961 3.49683 9.30357 3.46164 9.34577L0.512641 12.8858C0.467037 12.9405 0.437977 13.0071 0.428862 13.0778C0.419747 13.1485 0.430956 13.2203 0.461175 13.2848C0.491394 13.3493 0.539372 13.4039 0.599493 13.4422C0.659613 13.4804 0.729386 13.5007 0.800641 13.5008Z"
            fill="#D34D3E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.0005 4.50059C9.6725 4.50059 7.5905 5.56109 6.215 7.22759C6.15358 7.3072 6.07678 7.37365 5.98916 7.42298C5.90155 7.47231 5.80491 7.50353 5.70499 7.51476C5.60506 7.52599 5.50391 7.51702 5.40752 7.48838C5.31114 7.45973 5.2215 7.412 5.14394 7.34801C5.06637 7.28403 5.00246 7.2051 4.95601 7.11593C4.90956 7.02675 4.88152 6.92914 4.87355 6.82891C4.86558 6.72867 4.87785 6.62786 4.90962 6.53246C4.94139 6.43707 4.99202 6.34903 5.0585 6.27359C6.15678 4.94388 7.61388 3.95761 9.2565 3.43208C10.8991 2.90654 12.6581 2.86387 14.3243 3.30913C15.9904 3.75438 17.4936 4.66884 18.6551 5.94372C19.8166 7.21861 20.5874 8.80027 20.876 10.5006H19.3505C19.0042 8.80681 18.0836 7.28458 16.7443 6.19131C15.405 5.09804 13.7293 4.5008 12.0005 4.50059ZM4.6505 13.5006C4.93447 14.8875 5.60503 16.1658 6.58472 17.1878C7.5644 18.2098 8.81324 18.9337 10.1869 19.276C11.5606 19.6183 13.0032 19.565 14.3478 19.1222C15.6925 18.6793 16.8845 17.8651 17.786 16.7736C17.8474 16.694 17.9242 16.6275 18.0118 16.5782C18.0995 16.5289 18.1961 16.4977 18.296 16.4864C18.3959 16.4752 18.4971 16.4842 18.5935 16.5128C18.6899 16.5415 18.7795 16.5892 18.8571 16.6532C18.9346 16.7172 18.9985 16.7961 19.045 16.8853C19.0914 16.9744 19.1195 17.072 19.1274 17.1723C19.1354 17.2725 19.1232 17.3733 19.0914 17.4687C19.0596 17.5641 19.009 17.6522 18.9425 17.7276C17.8442 19.0573 16.3871 20.0436 14.7445 20.5691C13.1019 21.0946 11.3429 21.1373 9.67674 20.6921C8.01057 20.2468 6.50736 19.3323 5.34588 18.0575C4.18441 16.7826 3.41355 15.2009 3.125 13.5006H4.6505Z"
            fill="#D34D3E"
          />
        </svg>
        <span className="text-[20px] font-bold text-[#D34D3E]">Regenerate</span>
      </button>
    </div>
  );
};

export default GenerateNFT;
