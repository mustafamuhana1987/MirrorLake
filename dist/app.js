const toggle=document.querySelector('.menu'),nav=document.querySelector('nav');function close(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();toggle.focus()}});document.addEventListener('click',e=>{if(!e.target.closest('header'))close()});

const inquiry=document.querySelector('#reservation-inquiry');
if(inquiry){
 const arrival=inquiry.elements.arrival,departure=inquiry.elements.departure;
 const now=new Date(),today=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');
 arrival.min=today;departure.min=today;
 function dates(){departure.min=arrival.value||today;departure.setCustomValidity(departure.value&&arrival.value&&departure.value<arrival.value?'Departure must be on or after arrival.':'');}
 arrival.addEventListener('input',dates);departure.addEventListener('input',dates);
 inquiry.addEventListener('submit',e=>{e.preventDefault();dates();if(!inquiry.reportValidity())return;
 const v=Object.fromEntries(new FormData(inquiry));
 const body=['Reservation inquiry','', 'Full name: '+v.firstName.trim()+' '+v.lastName.trim(),'Email: '+v.email.trim(),'Phone: '+v.phone.trim(),'Arrival: '+v.arrival,'Departure: '+v.departure,'Group size: '+v.groupSize,'','About our group:',v.message.trim()].join('\n');
 document.querySelector('#inquiry-preview').value=body;
 document.querySelector('#inquiry-fallback').hidden=false;
 const status=document.querySelector('#inquiry-status');status.textContent='Your email draft is ready. Review and send it in your email app. Your inquiry has not been sent yet.';status.focus();
 window.location.href='mailto:reservations@mirrorlakeretreat.org?subject='+encodeURIComponent('Group reservation inquiry')+'&body='+encodeURIComponent(body);
 });
 document.querySelector('#copy-inquiry').addEventListener('click',async()=>{const preview=document.querySelector('#inquiry-preview');try{await navigator.clipboard.writeText(preview.value);document.querySelector('#inquiry-status').textContent='Inquiry copied. Paste it into an email to reservations@mirrorlakeretreat.org and send.';}catch{preview.focus();preview.select();document.querySelector('#inquiry-status').textContent='Select and copy the prepared inquiry below, then paste it into your email.';}});
}
