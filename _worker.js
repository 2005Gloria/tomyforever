const face = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCABSAFIDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAQCAwUBBv/EAC4QAAICAQMDAwIEBwAAAAAAAAECAAMRBBIhMUFREyIyYXEFIzOhNEJyc4GR0f/EABcBAQEBAQAAAAAAAAAAAAAAAAIBAAP/xAAaEQEBAQADAQAAAAAAAAAAAAAAARECEjEh/9oADAMBAAIRAxEAPwDzlRGOT0ldl7OStXC9zIO5Zdq9O8nTWTA6eoLUO4yZYtR7CNLRLkpEPZZxJCsw9EnqJprpx3g1SiTsvVmGlgcpkGX06l19tw48xxalJnbNKrI0UqXirBDDIORCLoTp7Ap+B/aMyg5CEJmYtXJjVTqp65+0XqQtgDoesfoqrXsPvJSi6pt2OI3WnMXNXtJrYEjtK69UQwyehnM2hahC8GKtVYeA0ue5TVuDc5iuoucWMtYLBBk7fHmWRq6K7UP6gMb025jssGM/vENNqd9qj03ORu4QnjzNvTtTqagUIOO4MX1oyvxHTenz/qV0NuqH04mn+I1E0nGMiZenG3ePrFA5RbCEJhZVH6O4dpIhzSHViLN3wx285kdESKsEY5jgQt8RJbhSahWfSpsL7vULZT3A4H1kaa3dgQOsYWlUYbyOfPSFBvovDWPWecrs7Q26UmL1ocLixTiVsl1DN6bkBhg4PUSWsrs1lwddSyKByJfZYrVVpyxUYLEdZC9JaemqqwOgKNjHBImlp1IGalCf0jEpSpWj1FLAcTbqyYlahs0j567ZkUgF2C8nHPgT0AXFZyOMTJu28rSoKhvd5zFuDZqjIhK24YjwYRa54UG32sgIVgOvmNI4UTO09ps0wXd8O0YrfOAYbClWWvubzO1qRyDIXKSRsJA74llCV/z7jIpiutR8n5P1xJnYAfeBjzOVLSOSjE/aMNVTaBurGPE3wkdOyvys0aWwJnJWtJ9nA8RquzmRTzfpgiZJ0tl2pa5mFaK3QdSI5rb9miIB5bgTNDP6ewsxXxmLNC8sUuMuxHTMJZiEWBrzAJByCR9o5TfvA7EdYlJIcWA/WKwZWpXbHKWGPrMvlfMtTUlR9ZzsdJW1UF7sJeignqMTDXVt5EYq1TnvDhTlGrYiKucyCZLcRT1nbsfuYzp87gTKupa8j8qv/JlGJ26z1ddcO1ZC/sP+wxG5X1yE7iEyPJw7iEIxai/GQA5hCczX1KPAjdQGOkISUouWMUfIQhJDJ6f+K1n99oxCE6OIhCEjP//Z';
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (!response.headers.get('content-type')?.includes('text/html')) return response;
    return new HTMLRewriter().on('#scrollProgress', {element(el) {el.remove();}}).on('#babyPhotoSpace', {
      element(el) {
        el.setAttribute('style', 'width:82px;height:100px;top:-23px;border:0!important;outline:0!important;box-shadow:none!important;background:transparent!important;border-radius:46% 46% 48% 48%;overflow:hidden;padding:0;');
        el.setInnerContent('<img src="' + face + '" alt="Michael as a little boy" width="82" height="100" style="display:block;width:100%;height:100%;object-fit:fill;border:0;outline:0;box-shadow:none;">', {html:true});
      }
    }).transform(response);
  }
};
