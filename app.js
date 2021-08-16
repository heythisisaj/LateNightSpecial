NSURL *instagramURL = [NSURL URLWithString:@"instagram://user?username=USERNAME"];
if ([[UIApplication sharedApplication] canOpenURL:instagramURL]) {
    [[UIApplication sharedApplication] openURL:instagramURL];
}