import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  { path: 'product/:id', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'message/:id', loadChildren: './pages/inbox/message/message.module#MessagePageModule' },
  { path: 'new-message', loadChildren: './pages/inbox/new-message/new-message.module#NewMessagePageModule' },
  { path: 'wishlist', loadChildren: './pages/profile/wishlist/wishlist.module#WishlistPageModule' },
  { path: 'balance', loadChildren: './pages/profile/balance/balance.module#BalancePageModule' },
  { path: 'personalisation', loadChildren: './pages/profile/personalisation/personalisation.module#PersonalisationPageModule' },
  { path: 'customer/:id', loadChildren: './pages/profile/customer/customer.module#CustomerPageModule' },
  { path: 'order', loadChildren: './pages/profile/order/order.module#OrderPageModule' },
  { path: 'discount', loadChildren: './pages/profile/discount/discount.module#DiscountPageModule' },
  { path: 'forum', loadChildren: './pages/profile/forum/forum.module#ForumPageModule' },
  { path: 'invitation', loadChildren: './pages/profile/invitation/invitation.module#InvitationPageModule' },
  { path: 'holiday', loadChildren: './pages/profile/holiday/holiday.module#HolidayPageModule' },
  { path: 'settings', loadChildren: './pages/profile/settings/settings/settings.module#SettingsPageModule' },
  { path: 'about', loadChildren: './pages/profile/about/about/about.module#AboutPageModule' },
  { path: 'guides', loadChildren: './pages/profile/guides/guides/guides.module#GuidesPageModule' },
  { path: 'guide', loadChildren: './pages/profile/guides/guide/guide.module#GuidePageModule' },
  { path: 'payment/:id', loadChildren: './pages/order/payment/payment.module#PaymentPageModule' },
  { path: 'address', loadChildren: './pages/order/address/address.module#AddressPageModule' },
  { path: 'payment-option', loadChildren: './pages/order/payment-option/payment-option.module#PaymentOptionPageModule' },
  { path: 'listing/:id', loadChildren: './pages/search/listing/listing.module#ListingPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
