// Main page javascript

const HomeMain = {
    init: function () {
        this.bindEvents();
    }
    , bindEvents: function () {
        document.getElementById('search-input').addEventListener('keyup', this.search);
    }
    , search: function (e) {
        const search_input = document.getElementById('search-input');
        const search_button = document.getElementById('search-button');
        const search_results = document.getElementById('search-results');
        const search_results_list = document.getElementById('search-results-list');
        const search_results_none = document.getElementById('search-results-none');
        if (e.keyCode == 13) {
            search_button.click();
        }
        if (search_input.value.length > 0) {
            search_results.style.display = 'block';
            search_results_none.style.display = 'none';
            search_results_list.innerHTML = '';
            if (search_input.value.length > 2) {
                search_button.style.display = 'inline-block';
                HomeMain.search_ajax(search_input.value);
            }
        } else {
            search_results.style.display = 'none';
            search_button.style.display = 'none';
        }
    }, search_ajax: function (search_input) {
        const search_results_list = document.getElementById('search-results-list');
        const search_results_none = document.getElementById('search-results-none');
        const search_results = document.getElementById('search-results');
        const search_button = document.getElementById('search-button');
        const search_input = document.getElementById('search-input');
        const search_results_loading = document.getElementById('search-results-loading');
        const search_results_loading_text = document.getElementById('search-results-loading-text');
        search_results_loading.style.display = 'block';
        search_results_loading_text.innerHTML = 'Searching...';
        search_results_list.innerHTML = '';
        search_results_none.style.display = 'none';
        search_results.style.display = 'block';
        search_button.style.display = 'inline-block';
        search_input.style.backgroundColor = '#d5d5d5';
        search_input.style.color = '#000';
        search_input.style.borderColor = '#000';
        search_input.style.boxShadow = 'inset 0 0 0 1px #000';
        const xhr = new XMLHttpRequest();
        const url = '/search/' + search_input;
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const json = JSON.parse(xhr.responseText);
                if (json.length > 0) {
                    for (let i = 0; i < json.length; i++) {
                        const search_result_item = document.createElement('li');
                        search_result_item.className = 'search-result-item';
                        search_result_item.innerHTML = '<a href="/' + json[i].slug + '">' + json[i].title + '</a>';
                    }
                } else {
                    search_results_none.style.display = 'block';
                }
                search_results_loading.style.display = 'none';
                search_results_loading_text.innerHTML = '';
                search_input.style.backgroundColor = '#fff';
                search_input.style.color = '#000';
                search_input.style.borderColor = '#000';
                search_input.style.boxShadow = 'inset 0 0 0 1px #000';
            }
        };
        xhr.send();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    HomeMain.init();
});
