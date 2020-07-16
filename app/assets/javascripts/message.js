$(function(){
  function buildHTML(message){
    if (message.image) {
      let html = 
        `<div class="chat-list__content">
          <div class="chat-list__main>
            <div class="chat-list__message__Info-name">
              ${message.user_name}
            </div>
            <div class="chat-list__message__Info-date">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-list__Info">
            <div class="chat-list__Info__lists">
              <p class="chat-list__Info">
                ${message.content}
              </p>
              img class="chat-list__info" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="chat-list__content">
        <div class="chat-list__main>
          <div class="chat-list__message__Info-name">
              ${message.user_name}
          </div>
          <div class="chat-list__message__Info-date">
              ${message.created_at}
          </div>
        
        <div class="chat-list__Info">
          <div class="chat-list__Info__lists">
            <p class="chat-list__Info">
                ${message.content}
            </p>
          </div>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      console.log(data)
      let html = buildHTML(data);
      $('.chat-list').append(html);
      $('form')[0].reset();
      $('.chat-list').animate({ scrollTop: $('.chat-list')[0].scrollHeight});
    })
    .fall(function(){
         alert("メッセージ送信に失敗しました")
    });
  });
});