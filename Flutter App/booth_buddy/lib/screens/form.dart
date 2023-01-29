// import 'dart:html';

import 'package:booth_buddy/screens/globals.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class form extends StatelessWidget {
  //final _formKey = GlobalKey<FormState>();
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
      //content: Text("This is my message."),
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

  bool _btnEnabled = false;

  @override
  Widget build(BuildContext context) {
    const appTitle = 'Interest Form';
    //final formKey = GlobalKey<FormState>();
    return SafeArea(
        child: Scaffold(
      appBar: AppBar(
        title: const Text(appTitle),
        //change the text color
        foregroundColor: Color.fromARGB(255, 255, 255, 255),
        // change the font
        //fontFamily: 'Roboto',
      ),
      body: Container(
          padding: EdgeInsets.all(30.0), //was 20
          child: Form(
              //key: formKey,
              child: ListView(children: [
            TextFormField(
              controller: nameController,
              autovalidateMode: AutovalidateMode.onUserInteraction,
              validator: (value) {
                if (value == null ||
                    value.isEmpty ||
                    num.tryParse(value) != null) {
                  _btnEnabled = false;
                  return 'Please enter your name';
                }
                _btnEnabled = true;
                return null;
              },
              decoration: InputDecoration(
                labelText: "Name",
                prefixIcon: Icon(Icons.account_circle),
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 15.0),
            TextFormField(
                controller: emailController,
                autovalidateMode: AutovalidateMode.onUserInteraction,
                validator: (value) {
                  if (value == null ||
                      value.isEmpty ||
                      !value.contains('@') ||
                      !value.contains('.')) {
                    _btnEnabled = false;
                    return 'Please enter a valid email address';
                  }
                  _btnEnabled = true;
                  return null;
                },
                decoration: InputDecoration(
                  labelText: "Email",
                  prefixIcon: Icon(Icons.email_outlined),
                  border: OutlineInputBorder(),
                )),
            SizedBox(height: 15.0),
            TextFormField(
                controller: majorController,
                autovalidateMode: AutovalidateMode.onUserInteraction,
                validator: (value) {
                  if (value == null ||
                      value.isEmpty ||
                      num.tryParse(value) != null) {
                    _btnEnabled = false;
                    return 'Please enter your major';
                  }
                  _btnEnabled = true;
                  return null;
                },
                decoration: InputDecoration(
                  labelText: "Major",
                  prefixIcon: Icon(Icons.school_outlined),
                  border: OutlineInputBorder(),
                )),
            SizedBox(height: 15.0),
            TextFormField(
                controller: yearController,
                autovalidateMode: AutovalidateMode.onUserInteraction,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    _btnEnabled = false;
                    return 'Please enter your school year';
                  }
                  _btnEnabled = true;
                  return null;
                },
                decoration: InputDecoration(
                  labelText: "School Year",
                  prefixIcon: Icon(Icons.calendar_today),
                  border: OutlineInputBorder(),
                )),
            SizedBox(height: 15.0),
            TextFormField(
                controller: phoneController,
                autovalidateMode: AutovalidateMode.onUserInteraction,
                validator: (value) {
                  if (value == null ||
                      value.isEmpty ||
                      value.length != 10 ||
                      num.tryParse(value) == null) {
                    _btnEnabled = false;
                    return 'Please enter a valid phone number';
                  }
                  _btnEnabled = true;
                  return null;
                },
                decoration: InputDecoration(
                  labelText: "Phone Number",
                  prefixIcon: Icon(Icons.phone),
                  border: OutlineInputBorder(),
                )),
            SizedBox(height: 15.0),
            ElevatedButton(
                onPressed: () async {
                  if (_btnEnabled == true &&
                      nameController.text.isNotEmpty &&
                      emailController.text.isNotEmpty &&
                      majorController.text.isNotEmpty &&
                      yearController.text.isNotEmpty &&
                      phoneController.text.isNotEmpty) {
                    for (String i in processedCodes.toSet().toList()) {
                      var map = new Map<String, dynamic>();
                      //print(i);
                      map['roomid'] = i;
                      map['name'] = nameController.text;
                      map["email"] = emailController.text;
                      map["major"] = majorController.text;
                      map["year"] = yearController.text;
                      map["phone"] = phoneController.text;
                      final response = await http.post(
                        Uri.parse(
                            'https://booth-buddy.vercel.app/api/CreateRoomCard'),
                        body: map,
                      );
                    }
                    showAlertDialog(context);
                  } else {
                    print("Error");
                  }
                  ;
                },
                child: Text('Submit'))
          ]))),
    ));
  }
}
