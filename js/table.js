export default (() => {

  const tableSection = document.querySelector('.dataMenu-table');
  const deleteModal = document.querySelector('.delete-data');

  tableSection?.addEventListener('click', async (event) => {

    if (event.target.closest('.delete')) {
        deleteModal.classList.toggle('active');
    }
  });
})();