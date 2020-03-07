$(document).ready(() => {
    $("#form_btn").click(e => {
        $.ajax({
            url: `https://sheet.best/api/sheets/bf74a7d5-8229-46a0-8cc0-ff36e26822f9`,
            type: 'POST',
            // mode: 'cors',
            dataType: 'json',
            data: $('#insert').serialize(),
            success: (response) => {
                if(response) {
                    console.log(response);
                    location.reload();
                }
            },
            error: (err) => {
                //
                console.log(err.message);
            }
        });
    });

    // $(".update").change(e=>{
    //     const id = $(e.target).parent().attr("id");
    //     const name = $(e.target).attr("name");
    //     const value = $(e.target).val();
    //     console.log(id, name,value);
    //     $.ajax({
    //         url: `https://sheet.best/api/sheets/bf74a7d5-8229-46a0-8cc0-ff36e26822f9/${id}`,
    //         type: 'POST',
    //         mode: 'cors',
    //         dataType: 'json',
    //         data: JSON.stringify({name : value}),
    //         success: (response) => {
    //             if(response) {
    //                 console.log(response);
    //             }
    //         },
    //         error: (err) => {
    //             //
    //             console.log(err.message);
    //          }
    //     });
    // });   

});
