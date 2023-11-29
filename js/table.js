export default (() => {

  const tableSection = document.querySelector('.dataMenu-table');
  const deleteModal = document.querySelector('.delete-data');
  const close = document.querySelector('.delete-options .red');

  tableSection?.addEventListener('click', async (event) => {

    if (event.target.closest('.delete')) {
        deleteModal.classList.toggle('active');
    }
  });
  close.addEventListener('click', () => {
    deleteModal.classList.toggle('active');
});
})();