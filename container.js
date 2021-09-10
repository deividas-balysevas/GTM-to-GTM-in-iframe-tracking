/* Pass event from iframe GTM */
<script>
setTimeout(function(){
var message = JSON.stringify ({
event: 'Purchase',
id: '{{id}}'
});
parent.postMessage (message, 'https://www.parent_domain.com');
}, 3000);
</script>

/* Catch the event from iframe GTM to parent GTM */
<script>
window.addEventListener('message', function(message) {
  if (message.origin.indexOf('iframe_domain.com') > 1) {
 
  var data = JSON.parse(message.data);
  var dataLayer = window.dataLayer = window.dataLayer || [];
 
  dataLayer.push({
      'event': data.event,
      'id': data.id
    });
}});
</script>
