export default (() => {
   
     const tabs =  document.querySelector('.tabs');

     tabs.addEventListener("click", (event) => {

        if(event.target.closest('.tab')){
            const tab = event.target.closest('.tab');
            document.querySelectorAll('.tab.selected').forEach(tab => tab.classList.remove('selected'));
            tab.classList.add('selected');
        }
     })
})();


