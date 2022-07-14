const Svgs = ({ name, className, onClick }) => {
  const svgs = {
    check: (
      <svg width="10" className={className} viewBox="0 0 9 7">
        <path d="M6.88471 0.207683C7.02558 0.0726919 7.21303 -0.00145012 7.40753 2.14954e-05C7.60202 0.00149312 7.78833 0.0784635 7.92716 0.214691C8.06598 0.350918 8.14645 0.535747 8.15159 0.730177C8.15673 0.924607 8.08614 1.11343 7.95471 1.2568L3.96471 6.2468C3.8961 6.3207 3.81329 6.38001 3.72124 6.42117C3.62919 6.46233 3.52978 6.48451 3.42896 6.48638C3.32814 6.48825 3.22798 6.46976 3.13447 6.43204C3.04095 6.39431 2.95601 6.33811 2.88471 6.2668L0.238708 3.6208C0.165022 3.55214 0.105919 3.46934 0.0649275 3.37734C0.0239355 3.28534 0.0018935 3.18603 0.00011672 3.08533C-0.00166006 2.98462 0.0168648 2.88459 0.0545858 2.79121C0.0923068 2.69782 0.148451 2.61298 0.21967 2.54176C0.290889 2.47055 0.375723 2.4144 0.469111 2.37668C0.562499 2.33896 0.662528 2.32043 0.763231 2.32221C0.863934 2.32399 0.963247 2.34603 1.05525 2.38702C1.14725 2.42801 1.23005 2.48712 1.29871 2.5608L3.39271 4.6538L6.86571 0.228803C6.87196 0.221104 6.87864 0.213759 6.88571 0.207683H6.88471Z" />
      </svg>
    ),
    logo: (
      <svg width="133" height="75" viewBox="0 0 133 75" fill="none">
        <ellipse cx="66" cy="60.5" rx="55" ry="14.5" fill="#0D98BA" />
        <ellipse cx="50.5" cy="42" rx="50.5" ry="18" fill="#0D98BA" />
        <ellipse cx="82.5" cy="42" rx="50.5" ry="18" fill="#0D98BA" />
        <circle cx="66" cy="30" r="30" fill="white" />
        <circle cx="67.0059" cy="30" r="16" fill="#6EA8FF" />
        <circle cx="67.0059" cy="30" r="11" fill="black" />
        <path
          d="M64.0055 22.5C64.0055 26.6421 60.6477 30 56.5055 30C52.3634 30 50.8971 27.9881 51.0056 27.5C52.0056 23 54.0056 18.5 60.0055 15.5C60.1109 15.4473 64.0055 18.3579 64.0055 22.5Z"
          fill="white"
        />
      </svg>
    ),
    calendar: (
      <svg className={className} fill="none" stroke="currentColor">
        <path d="M22.5,3H21V2a1,1,0,0,0-1-1H19a1,1,0,0,0-1,1V3H14V2a1,1,0,0,0-1-1H12a1,1,0,0,0-1,1V3H7V2A1,1,0,0,0,6,1H5A1,1,0,0,0,4,2V3H2.5A1.5,1.5,0,0,0,1,4.5v18A1.5,1.5,0,0,0,2.5,24h20A1.5,1.5,0,0,0,24,22.5V4.5A1.5,1.5,0,0,0,22.5,3ZM19,2l1,0,0,3L19,5ZM12,2l1,0V3.44s0,0,0,.06,0,0,0,.07L13,5,12,5ZM5,2,6,2,6,5,5,5ZM2.5,4H4V5A1,1,0,0,0,5,6H6A1,1,0,0,0,7,5V4h4V5a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V4h4V5a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4h1.5a.5.5,0,0,1,.5.5V8H2V4.5A.5.5,0,0,1,2.5,4Zm20,19H2.5a.5.5,0,0,1-.5-.5V9H23V22.5A.5.5,0,0,1,22.5,23Z" />
      </svg>
    ),
    chain: (
      <svg
        className={className}
        width="15"
        height="49"
        viewBox="0 0 15 49"
        fill="none"
      >
        <path
          d="M14.9508 33.9707V41.4352C14.9508 45.5482 11.6459 48.8996 7.47541 48.8996C3.38361 48.8996 0 45.5482 0 41.4352V33.9707C0 29.8577 3.30492 26.5063 7.47541 26.5063C11.6459 26.5063 14.9508 29.8577 14.9508 33.9707ZM3.77705 41.4352C3.77705 43.4917 5.42951 45.1674 7.47541 45.1674C9.52131 45.1674 11.1738 43.4917 11.1738 41.4352V33.9707C11.1738 31.9142 9.52131 30.2385 7.47541 30.2385C5.42951 30.2385 3.77705 31.9142 3.77705 33.9707V41.4352ZM14.9508 9.74945V17.2139C14.9508 21.3269 11.6459 24.6783 7.47541 24.6783C3.38361 24.6783 0 21.3269 0 17.2139V9.74945C0 5.6364 3.30492 2.28503 7.47541 2.28503C11.6459 2.28503 14.9508 5.6364 14.9508 9.74945ZM3.77705 17.2139C3.77705 19.2704 5.42951 20.9461 7.47541 20.9461C9.52131 20.9461 11.1738 19.2704 11.1738 17.2139V9.74945C11.1738 7.69292 9.52131 6.01724 7.47541 6.01724C5.42951 6.01724 3.77705 7.69292 3.77705 9.74945V17.2139Z"
          fill="#D0D0D0"
        />
        <path
          d="M9.36438 29.0198V19.7274C9.36438 17.29 5.66602 17.29 5.66602 19.7274V29.0198C5.66602 31.4572 9.36438 31.4572 9.36438 29.0198ZM9.36438 48.7472V43.7202C9.36438 41.2828 5.66602 41.2828 5.66602 43.7202V48.7472H9.36438ZM5.66602 0V5.02706C5.66602 7.46442 9.36438 7.46442 9.36438 5.02706V0H5.66602Z"
          fill="#94989B"
        />
      </svg>
    ),
    fileClose: (
      <svg className={className} width="49" height="40" viewBox="0 0 49 40">
        <path d="M46.8293 6.97561H24.939L17.7866 0.134146C17.6956 0.0489497 17.5759 0.00106888 17.4512 0H1.95122C0.871951 0 0 0.871951 0 1.95122V38.0488C0 39.1281 0.871951 40 1.95122 40H46.8293C47.9085 40 48.7805 39.1281 48.7805 38.0488V8.92683C48.7805 7.84756 47.9085 6.97561 46.8293 6.97561Z" />
      </svg>
    ),
    fileOpen: (
      <svg className={className} width="58" height="40" viewBox="0 0 58 40">
        <path d="M55.5954 15.8537H49V8.92683C49 7.84756 48.1267 6.97561 47.0458 6.97561H24.9771L17.8137 0.134146C17.7226 0.0489497 17.6027 0.00106888 17.4779 0H1.9542C0.873282 0 0 0.871951 0 1.95122V38.0488C0 39.1281 0.873282 40 1.9542 40H47.4122C48.2061 40 48.9267 39.5183 49.226 38.7805L57.4092 18.5366C57.5008 18.3049 57.5496 18.0549 57.5496 17.8049C57.5496 16.7256 56.6763 15.8537 55.5954 15.8537ZM41.771 15.8537H10.626C9.83206 15.8537 9.11145 16.3354 8.81221 17.0732L4.39695 28V4.39024H15.9084L23.2122 11.3659H41.771V15.8537Z" />
      </svg>
    ),
  }
  const svg = svgs[name]
  return svg
}

export default Svgs
