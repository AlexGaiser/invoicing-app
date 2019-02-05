const {Invoice, Client, User} = require('../models')

const main = async () =>{
    //delete database
    await Invoice.destroy({
        where: {}
    })
    await Client.destroy({
        where: {}
    })
    await User.destroy({
        where: {}
    })

    // Seed a User

  const UserAlex = await User.create({
    buisness_name: 'Jason Gaiser Designs',
    user_name: 'Jason Gaiser',
    user_email: 'Kwalex.json@gmail.com',
    user_phone: '3472223231',
    user_street: '1223 Fake st',
    user_city:'Falseberg',
    user_zip:'12345'
  });

  const UserFakeman = await User.create({
      buisness_name: 'Extant Industries',
      user_name: 'John Notperson',
      user_email: 'Kwalex.json@gmail.com',
      user_phone: '5555555555',
      user_street: '1344 Fake ave.',
      user_city:'Notaplace',
      user_zip:'54321'
  })
//---------------------------------------------------
 
    // Seed a client

  const Google = await Client.create({
    client_name: 'Google',
    client_email: 'Google@gmail.com',
    client_phone: '2123336543'
  });


  //---------------------------------------------------

  //Seed a job invoice

  const Job1 = await Invoice.create({
    title: 'Logo Redesign',
    invoice_number: '00001',
    date: 'Jan 1, 2019',
    description: 'Created new branding strategy for client "Google Corporation" and redefined brand identity.',
    extra_details: 'Client also wanted a brand manual created',
    logged_time: '08:20:10',
    rate: '200.03',
    extra_fees: '30.00',
    total_amount: '1840.03',
  });


  await Job1.setClient(Google)
  await Job1.setUser(UserAlex)
  
  ;
}

main()