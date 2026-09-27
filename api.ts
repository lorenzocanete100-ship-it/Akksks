let csrf='';
export function setCSRF(token:string){csrf=token}
export function api(url:string,options:RequestInit={}){const headers=new Headers(options.headers);if(options.method&&options.method!=='GET')headers.set('X-CSRF-Token',csrf);return fetch(url,{...options,headers,credentials:'same-origin'})}
