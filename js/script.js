function enviarEmail() {
    var email = 'tiago.engsoft@outlook.com';
    var assunto = 'Assunto do Email';
    var corpo = 'Corpo do Email';
    var link = 'https://outlook.live.com/mail/0/' + email + '?subject=' + assunto + '&body=' + corpo;
    window.location.href = link;
}
function scrollDown() {
    // Rola a página para a posição y de 1000 pixels
    window.scrollTo(0, 1000);
}