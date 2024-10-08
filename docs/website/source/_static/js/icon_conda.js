/*******************************************************************************
 * Set a custom icon for conda as it's not available in the fa built-in brands
 */
FontAwesome.library.add(
  (faListOldStyle = {
    prefix: "fa-custom",
    iconName: "conda",
    icon: [
      127, // viewBox width
      127, // viewBox height
      [], // ligature
      "e001", // unicode codepoint - private use area
      "M13.8 81.2c-2.1 4.2-3.8 8.6-5.2 13.1 4.7 1.3 9.4 2.2 14.2 2.6.1-3.8.4-7.4.9-11-3.4-1.3-6.7-2.9-9.9-4.7zM33 32.8c-2.8 0-5.5.2-8.3.6.4 2.8.8 5.5 1.5 8.3 1.9-3.2 4.2-6.1 6.8-8.7v-.2zM10.5 98.7c3.6 5.5 8.1 10.4 13.2 14.5-.5-4.3-.9-8.4-.9-12.5-4.2-.4-8.3-1.1-12.3-2zM43 3.4c-5 1.7-9.6 4-14 6.8 3.3.6 6.5 1.3 9.7 2.3 1.2-3.1 2.7-6.1 4.3-9.1zM63.6 0c-2.5 0-4.9.2-7.3.4 3.4 2.4 6.6 4.9 9.7 7.7l2.5 2.3-2.5 2.5c-2.1 2-4.1 4.1-6 6.4v.1s-.4.4-1 1.1c1.5-.2 3-.2 4.6-.2 23.9 0 43.3 19.4 43.3 43.3s-19.4 43.3-43.3 43.3c-8.3 0-16.1-2.3-22.7-6.4-3.3.4-6.5.6-9.8.6-1.5 0-3 0-4.6-.1.1 4.9.6 10 1.4 15.3 10.2 6.9 22.4 10.9 35.6 10.9 35.1 0 63.6-28.5 63.6-63.6C127.2 28.5 98.7 0 63.6 0z M55.1 15c1.3-1.5 2.6-3 3.9-4.4-3-2.5-6.1-4.9-9.4-6.9-2 3.4-3.8 7-5.3 10.6 2.9 1.1 5.7 2.3 8.4 3.6 1.3-1.6 2.2-2.6 2.4-2.9zM19.4 34.1c-4.7.8-9.3 2.1-13.8 3.7 1.8 4.6 4.1 9.1 6.7 13.3 3-2.1 6.1-4.1 9.3-5.8-1-3.7-1.7-7.4-2.2-11.2zM11.1 58.1c-3.4 2.8-6.6 5.8-9.6 9.2 3.3 2.9 6.8 5.5 10.5 7.9 1.7-3 3.6-6 5.6-8.8-2.2-2.6-4.4-5.4-6.5-8.3zM27.3 87.3c-.4 3.2-.7 6.5-.8 9.9 3.2.2 6.4.2 9.6 0-3.4-2.8-6.4-6.1-8.8-9.9zM36.6 18.1c-4-1.1-8.1-2-12.2-2.5-.4 4.2-.4 8.3-.1 12.4 3.3-.4 6.5-.6 9.8-.6.6-3.2 1.5-6.3 2.5-9.3zM42.3 19.9c-.8 2.4-1.5 4.8-2.1 7.2 2.8-1.8 5.8-3.3 8.9-4.4-2.2-1-4.5-1.9-6.8-2.8zM.5 72.1c.8 6.2 2.5 12.1 5 17.5C6.8 86 8.3 82.4 10 79c-3.3-2.1-6.4-4.4-9.5-6.9zM18.8 18.5c-3.8 3.8-7.1 8-9.9 12.6 3.3-1 6.6-1.8 10-2.4-.2-3.4-.3-6.8-.1-10.2zM15 55.2c1.6 2.3 3.4 4.6 5.3 6.8.2-4 .8-7.8 2-11.5-2.5 1.4-5 3-7.3 4.7zM15.8 77.3c2.7 1.5 5.4 2.9 8.3 4.1-1.7-3.7-2.8-7.6-3.4-11.8-1.8 2.5-3.4 5.1-4.9 7.7zM8.4 54.1c-2-3.2-3.8-6.5-5.4-10C1.2 49.7.1 55.7 0 61.8c2.7-2.8 5.5-5.4 8.4-7.7z",
    ],
  }),
);
