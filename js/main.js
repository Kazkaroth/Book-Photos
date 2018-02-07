/**
 * Created by Saito on 04/02/2018.
 */
$(document).ready(function () {
    /*Ouverture de la gallery choisie*/
    $('.choosingLandButton').click(function () {
        $('#lands-container').css('display', 'flex');
        $('.choosingGallery').css('display', 'none');
        $('.returnButton').css('display', 'block');
    });
    $('.choosingFaceButton').click(function () {
        $('#faces-container').css('display', 'flex');
        $('.choosingGallery').css('display', 'none');
        $('.returnButton').css('display', 'block');
    });
    /*Ouvrir le modal et lui inserer l'image ayant servie a l'ouverture*/
    $('#galleryImgContainer img').click(function () {
        let selectImage = $(this,'img').html(this); /*SELECTION DE L'IMAGE /!\*/
        let selectedImage = selectImage.clone(); /*Clone de la selection*/
        $(selectedImage).appendTo($('#modalContent')); /*Ajout de la copie au Modal*/
        $('#myModal').css('display', 'block');
    });
    /*Fermer et reset le modal*/
    $('.closeModalButton').click(function () {
        $('#myModal').css('display', 'none');
        $('#modalContent').html(' ') /*reset du contenu du Modal*/
    });
    $('#myModal').click(function () {
        $('#myModal').css('display', 'none');
        $('#modalContent').html(' ')
    });
    /*Return Button*/
    $('.returnButton').click(function () {
        $('#lands-container').css('display', 'none');
        $('#faces-container').css('display', 'none');
        $('.choosingGallery').css('display', 'flex');
        $('.returnButton').css('display', 'none');
    })
});