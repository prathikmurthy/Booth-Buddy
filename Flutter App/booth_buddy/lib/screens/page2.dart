//sample text field
import 'package:flutter/material.dart';

//create a class called Page2 that extends the StatelessWidget and contains the text "Hello World"
class Page2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      appBar: AppBar(
        title: Text("Page 2"),
      ),
      body: Center(
        child: Text("Hello World"),
      ),
    ));
  }
}


//add log statements