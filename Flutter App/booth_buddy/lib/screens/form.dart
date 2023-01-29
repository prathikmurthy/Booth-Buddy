import 'dart:html';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class form extends StatelessWidget {
  final nameController = TextEditingController();
  final emailController = TextEditingController();
  final majorController = TextEditingController();
  final yearController = TextEditingController();
  final phoneController = TextEditingController();

  //form({super.key});
  showAlertDialog(BuildContext context) {
    // set up the button
    Widget okButton = TextButton(
      child: Text("OK"),
      onPressed: () {
        nameController.clear();
        emailController.clear();
        majorController.clear();
        yearController.clear();
        phoneController.clear();
        Navigator.pop(context);
      },
    );
    // set up the AlertDialog
    AlertDialog alert = AlertDialog(
      title: Text("Submission Successful!"),
      content: Text("This is my message."),
      actions: [
        okButton,
      ],
    );
    // show the dialog
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return alert;
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    const appTitle = 'Form Styling Demo';
    final formKey = GlobalKey<FormState>();
    return SafeArea(
        child: Scaffold(
      appBar: AppBar(
        title: const Text(appTitle),
        //change the text color
        foregroundColor: Colors.black,
        // change the font
        //fontFamily: 'Roboto',
      ),
      body: Container(
          padding: EdgeInsets.all(30.0), //was 20
          child: Form(
              key: formKey,
              child: ListView(children: [
                TextFormField(
                  controller: nameController,
                  //change radius of the border
                  decoration: InputDecoration(
                    labelText: "Name",
                    prefixIcon: Icon(Icons.account_circle),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(20.0),
                    ),
                  ),
                ),
                SizedBox(height: 10.0),
                TextFormField(
                    controller: emailController,
                    decoration: InputDecoration(
                      labelText: "Email",
                      prefixIcon: Icon(Icons.email_outlined),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                    )),
                SizedBox(height: 10.0),
                TextFormField(
                    controller: majorController,
                    decoration: InputDecoration(
                      labelText: "Major",
                      prefixIcon: Icon(Icons.school_outlined),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                    )),
                SizedBox(height: 10.0),
                TextFormField(
                    controller: yearController,
                    decoration: InputDecoration(
                      labelText: "School Year",
                      prefixIcon: Icon(Icons.calendar_today),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                    )),
                SizedBox(height: 10.0),
                TextFormField(
                    controller: phoneController,
                    decoration: InputDecoration(
                      labelText: "Phone Number",
                      prefixIcon: Icon(Icons.phone),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                    )),
                SizedBox(height: 15.0),
                ElevatedButton(
                    onPressed: () async {
                      var map = new Map<String, dynamic>();
                      map['name'] = nameController.text;
                      map["email"] = emailController.text;
                      map["major"] = majorController.text;
                      map["year"] = yearController.text;
                      map["phone"] = phoneController.text;
                      final response = await http.post(
                        Uri.parse('https://buddy.free.beeceptor.com'),
                        body: map,
                      );
                      showAlertDialog(context);
                    },
                    child: Text('Submit'))
              ]))),
    ));
  }
}
