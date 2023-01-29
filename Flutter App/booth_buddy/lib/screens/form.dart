import 'package:flutter/material.dart';

class form extends StatelessWidget {
  final nameController = TextEditingController();
  final emailController = TextEditingController();
  final majorController = TextEditingController();
  final yearController = TextEditingController();
  final phoneController = TextEditingController();

  //form({super.key});

  @override
  Widget build(BuildContext context) {
    const appTitle = 'Form Styling Demo';
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
              padding: EdgeInsets.all(20.0),
              child: ListView(children: [
                TextFormField(
                  controller: nameController,
                  decoration: InputDecoration(
                    labelText: "Name",
                    prefixIcon: Icon(Icons.account_circle),
                    border: OutlineInputBorder(),
                  ),
                ),
                TextFormField(
                    controller: emailController,
                    decoration: InputDecoration(
                      labelText: "Email",
                      prefixIcon: Icon(Icons.email_outlined),
                      border: OutlineInputBorder(),
                    )),
                TextFormField(
                    controller: majorController,
                    decoration: InputDecoration(
                      labelText: "Major",
                      prefixIcon: Icon(Icons.school_outlined),
                      border: OutlineInputBorder(),
                    )),
                TextFormField(
                    controller: yearController,
                    decoration: InputDecoration(
                      labelText: "School Year",
                      prefixIcon: Icon(Icons.calendar_today),
                      border: OutlineInputBorder(),
                    )),
              ]))),
    );
  }
}
